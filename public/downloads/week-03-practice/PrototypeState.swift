// W03: original service-selection state trace.
// No UI, networking, clipboard access, or persistent storage.
func checkPrototypeState() -> String {
    let services = ["Library help", "IT help"]
    var selectedService = ""

    // Select the second service to view its details.
    selectedService = services[1]
    assert(selectedService == "IT help")

    // Back: clear selection, preserving the directory.
    selectedService = ""
    assert(selectedService.isEmpty)
    assert(services == ["Library help", "IT help"])

    // Select a different service after returning.
    selectedService = services[0]
    assert(selectedService == "Library help")
    return "State checks passed"
}

print(checkPrototypeState())
