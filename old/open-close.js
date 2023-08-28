function openProject(projectName) {
  if (projectName === "Portfolio-1") {
    const newTab = window.open("./Portfolio-1.html", "_blank");

    newTab.addEventListener("beforeunload", () => {
      newTab.close();
    });
  }
}
function closeProject() {
  close();
}
