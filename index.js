const bt = document.getElementsByClassName("todo-button")[0];
const txt = document.getElementsByClassName("todo-input")[0];
const parent = document.getElementsByClassName("todo-container")[0];

bt.addEventListener("click", (e) => {
    e.preventDefault();
    const dv = document.createElement("div");
    const under = document.getElementsByClassName("todo-list")[0];
    const l = document.createElement("li");
    l.classList.add("todo-item");
    l.innerText = txt.value;

    const bt1 = document.createElement("button");
    bt1.classList.add("complete-btn");
    bt1.textContent = "Completed";
    const bt2 = document.createElement("button");
    bt2.classList.add("trash-btn");
    bt2.textContent = "Delete";


    dv.appendChild(l);
    dv.appendChild(bt1);
    dv.appendChild(bt2);
    under.appendChild(dv);


    bt1.addEventListener("click", () => {
        l.classList.toggle("completed");
    });

    bt2.addEventListener("click", () => {
        dv.remove();
    });

});