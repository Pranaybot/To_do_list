const toDoForm = document.querySelector('.to-do-form');
const toDoList = document.querySelector('.to-do-list');
const savedErrands = localStorage.getItem("errands") ? JSON.parse(localStorage.getItem("errands")) : [];

// retrieve from localStorage
for (let errand of savedErrands) {
  let newErrand = document.createElement("li");
  let crossButton = document.createElement("button");
  crossButton.innerHTML = '&#10005;';

  newErrand.innerText = errand.errand;
  newErrand.isCompleted = errand.errandCompleted ? true : false;
  if (newErrand.isCompleted) {
    newErrand.style.textDecoration = "line-through";
  }
  toDoList.appendChild(newErrand);
  newErrand.appendChild(crossButton);
}

toDoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let crossButton = document.createElement("button");
    crossButton.innerHTML = '&#10005;';

    let newErrand = document.createElement("li");
    newErrand.isCompleted = false;
    newErrand.innerText = document.getElementById("errand").value;
    savedErrands.push({errandCompleted: false, errand: newErrand.innerText})
    localStorage.setItem("errands", JSON.stringify(savedErrands));
    toDoList.appendChild(newErrand);
    newErrand.appendChild(crossButton);

    toDoForm.reset();
});

toDoList.addEventListener("click", function(event) {
    const targetTag = event.target.tagName;
    if (targetTag === "BUTTON") {
        event.target.parentNode.remove();
    } else if (targetTag === "LI"){
        if (!event.target.isCompleted) {
            event.target.style.textDecoration = "line-through";
            event.target.isCompleted = true;
        }
    }
});


