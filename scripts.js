const dropdown = document.getElementById("dropdown");
const link = document.getElementsByClassName("link");
const allcontent = document.getElementsByClassName("drop-content");

function Show(event, id) {
  let current = event.target;
  let content = document.getElementById(id);
  if (current.classList.contains("active")) {
    dropdown.classList.remove("show");
    current.classList.remove("active");
    content.classList.remove("show");
  } else {
    LinkReset();
    event.target.classList.add("active");
    content.classList.add("show");
    if (!dropdown.classList.contains("show")) {
      dropdown.classList.add("show");
    }
  }
}

function LinkReset() {
  for (let i = 0; i < link.length; i++) {
    link[i].classList.remove("active");
  }
  for (let i = 0; i < allcontent.length; i++) {
    allcontent[i].classList.remove("show");
  }
}
