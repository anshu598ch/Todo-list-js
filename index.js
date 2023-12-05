// javascript code goes here
const inputEl = document.querySelector("input");
const btnArr = document.getElementsByClassName("todo-button"); //collection
const addBtn = btnArr[0]; //not confirmed
const ulEl = document.querySelector("ul");

//varying elements => needs to be updated with each li element added
let spanElArr = document.getElementsByTagName("span");
let completeBtnArr = document.getElementsByClassName("complete-btn");
let trashBtnArr = document.getElementsByClassName("trash-btn");

const completeBtnELFn = (newSpan, event) => {
    event.stopPropagation();
    newSpan.classList.toggle("strthru");
}
const trashBtnELFn = (li, event) => {
    event.stopPropagation();
    ulEl.removeChild(li);
}
addBtn.addEventListener("click", function(event) {
    const newDiv = document.createElement("div");
    ulEl.appendChild(newDiv);

    const newLi = document.createElement("li")
        // newLi.classList.add("todo-item");
        // newLi.textContent = inputEl.value;
    newLi.className = "todo-item";
    newDiv.appendChild(newLi);

    const newSpan = document.createElement("span");
    newSpan.textContent = inputEl.value;
    inputEl.value = "";
    newSpan.className = "whatever";
    newLi.appendChild(newSpan);

    const newCompleteBtn = document.createElement("button");
    newCompleteBtn.className = "complete-btn";
    newCompleteBtn.textContent = "Completed";
    newDiv.appendChild(newCompleteBtn);
    newCompleteBtn.addEventListener("click", function(event) {
        completeBtnELFn(newSpan, event);
    })

    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.className = "trash-btn";
    newDeleteBtn.textContent = "Delete";
    newDiv.appendChild(newDeleteBtn);
    newDeleteBtn.addEventListener("click", function(event) {
        trashBtnELFn(newDiv, event);
    });


    // updatingValues();

    event.preventDefault();
    event.stopPropagation();
})

const buttonEL = () => {
    for (let i = 0; i < completeBtnArr.length; i++) {
        completeBtnArr[i].addEventListener("click", function() {
            spanElArr[i].classList.toggle("strthru");
        });
        trashBtnArr[i].addEventListener("click", function() {

        });

    }
}

buttonEL();