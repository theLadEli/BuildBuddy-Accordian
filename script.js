var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Close all other accordions
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        acc[j].children[1].style.maxHeight = null;
        acc[j].children[0].children[0].src = "/assets/plus.svg"; // path to plus icon
      }
    }

    // Toggle this accordion
    this.classList.toggle("active");
    var panel = this.children[1];
    var icon = this.children[0].children[0];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      icon.src = "/assets/plus.svg"; // path to plus icon
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      icon.src = "/assets/minus.svg"; // path to minus icon
    }
  });
}
