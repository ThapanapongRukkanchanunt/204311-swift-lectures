import SwiftUI
import PhotosUI
import UIKit
struct ContentView: View {
    @State private var selection: PhotosPickerItem?
    @State private var image: UIImage?
    @State private var message = "Campus Help attachment checkpoint"
    private var fileURL: URL {
        FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
            .appendingPathComponent("request-attachment.data")
    }
    var body: some View {
        ScrollView {
            VStack {
                PhotosPicker("Choose image", selection: $selection, matching: .images)
                if let image { Image(uiImage: image).resizable().scaledToFit().accessibilityLabel("Selected practice image") }
                Text(message)
                Button("Remove saved image") {
                    do {
                        if FileManager.default.fileExists(atPath: fileURL.path) { try FileManager.default.removeItem(at: fileURL) }
                        image = nil; selection = nil; message = "Removed"
                    } catch { message = "Remove failed" }
                }
            }.padding()
        }
        .task {
            if let data = try? Data(contentsOf: fileURL) { image = UIImage(data: data) }
        }
        .task(id: selection) {
            guard let selection else { return }
            do {
                guard let data = try await selection.loadTransferable(type: Data.self), data.count <= 2_000_000,
                      let decoded = UIImage(data: data) else { message = "Use a small supported image"; return }
                try Task.checkCancellation()
                try data.write(to: fileURL, options: .atomic)
                image = decoded; message = "Saved locally"
            } catch is CancellationError { }
            catch { message = "Import failed" }
        }
    }
}
