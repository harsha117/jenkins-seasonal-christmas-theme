(function () {
  function addTree() {
    if (!document.body) {
      setTimeout(addTree, 100);
      return;
    }

    if (document.getElementById("christmas-tree")) return;

    const tree = document.createElement("img");
    tree.id = "christmas-tree";
    tree.src =
      "https://harsha117.github.io/jenkins-seasonal-christmas-theme/assets/christmas-tree.gif";

    document.body.appendChild(tree);
  }

  addTree();
})();
