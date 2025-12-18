(function () {
  function addSanta() {
    if (!document.body) {
      setTimeout(addSanta, 100);
      return;
    }

    if (document.getElementById("santa-sleigh")) return;

    const santa = document.createElement("img");
    santa.id = "santa-sleigh";
    santa.src =
      "https://harsha117.github.io/jenkins-seasonal-christmas-theme/assets/santa-sleigh.gif";

    document.body.appendChild(santa);
  }

  addSanta();
})();
