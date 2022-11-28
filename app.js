document.querySelector("#push").onclick = function () {
  // let audio = document.getElementById("p");
  // audio.play();

  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector("#newtask input").value}
              </span>
              <button class="delete">
                  <i class="far fa-trash-alt"></i>
              </button>
          </div> `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
// search--filter
const searchFormInput = document.querySelector(".search input");
var check1 = document.querySelector(".task .radio");
var ul = document.querySelector("#tasks");
const filterItems = (value) => {
  Array.from(ul.children).forEach((li) => {
    if (!li.textContent.toLowerCase().includes(value))
      li.classList.add("filtred");
    else li.classList.remove("filtred");
  });
};
searchFormInput.addEventListener("keyup", (e) => {
  const value = searchFormInput.value.toLowerCase().trim();
  filterItems(value);
});
// preloader
var loader = document.querySelector(".preloader span");
var preloader = document.querySelector(".preloader");
var parent = document.querySelector(".parent");

function gone() {
  loader.classList.toggle("gone");
}
function show() {
  preloader.style.opacity = "0";
  preloader.style.display = "none";
  parent.style.display = "block";
}
window.addEventListener("load", () => {
  setTimeout(gone, 2500);
  setTimeout(show, 3150);
});

let date = new Date();
let n = date.toDateString();

const day = (document.querySelector(".dmy").innerHTML = n + " ");
