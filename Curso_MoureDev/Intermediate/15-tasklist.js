document.addEventListener("DOMContentLoaded", () => {

    const text = document.getElementById("text");
    const button = document.getElementById("button");
    const list = document.getElementById("list");

    function addTask() {

        if (text.value === "") return
        const newelement = document.createElement("li");
        newelement.textContent = text.value;

        newelement.addEventListener("click", () => {
            newelement.remove();
        })


        list.appendChild(newelement);
        text.value = ""
    }

    button.addEventListener("click", addTask);

    text.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    })

});
