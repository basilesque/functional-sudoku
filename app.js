const boxes = document.getElementsByClassName("little-square-grid")

for (box of boxes) {
    box.addEventListener('click', function () {
        let columns = document.querySelectorAll(`.${this.classList[3]}`)
        let rows = document.querySelectorAll(`.${this.classList[4]}`)
        let highlightedBlocks = document.querySelectorAll(`.${this.classList[1]}`)
        for (highlighted of highlightedBlocks) {
            highlighted.classList.add("hovered");
            setTimeout(function () {
                for (highlighted of highlightedBlocks) {
                    highlighted.classList.remove("hovered");
                }
            }, 2000)
        }
        for (row of rows) {
            row.classList.add("hovered");
            setTimeout(function () {
                for (row of rows) {
                    row.classList.remove("hovered");
                }
            }, 2000)
        }
        for (column of columns) {
            column.classList.add("hovered");
            setTimeout(function () {
                for (column of columns) {
                    column.classList.remove("hovered");
                }
            }, 2000)
        }
    })
}



































// const numbers = document.querySelectorAll(".little-square-grid")

// for (number of numbers) {
//     number.addEventListener("click", alert("."))
// }