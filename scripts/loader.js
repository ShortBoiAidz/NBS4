$(document).ready(function () {
  // Select all images on the page
  let $imgs = $("img");
  let totalImgs = $imgs.length;
  let loadedImgs = 0;

  if (totalImgs === 0) {
    // No images, hide loader immediately
    $(".loading-screen").fadeOut(750);
    $(".content").fadeIn(1000);
  } else {
    $imgs.each(function () {
      // If already loaded (from cache), count it
      if (this.complete) {
        loadedImgs++;
        if (loadedImgs === totalImgs) {
          $(".loading-screen").fadeOut(750);
          $(".content").fadeIn(1000);
        }
      } else {
        // Otherwise, wait for load event
        $(this).on("load error", function () {
          loadedImgs++;
          if (loadedImgs === totalImgs) {
            $(".loading-screen").fadeOut(750);
            $(".content").fadeIn(1000);
          }
        });
      }
    });
  }
});

function emailClick() {
  onclick = alert("Email us:\nofficial@noodlebox.cc\nsupport@noodlebox.cc");
}

function notAvailable() {
  alert("Coming soon!");
}

function openSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".fa-bars");

  sidebar.style.display = "flex";
  menuButton.style.display = "none";
}

function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".fa-bars");

  sidebar.style.display = "none";
  menuButton.style.display = "block";
}

console.log("helloWorld(\"print\")")