import Foundation

struct Feature {
    let user: String
    let need: String
    let evidence: String
    var isSpecified: Bool {
        [user, need, evidence].allSatisfy {
            !$0.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
        }
    }
}
let feature = Feature(user: "Library visitor", need: "Find an open desk",
                      evidence: "Status includes its update time")
print("Fields present: \(feature.isSpecified)")
// Presence of fields is not proof that the requirement is useful or true.
