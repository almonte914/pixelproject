//inputs and form elements & assign variables
const myTable = document.querySelector("#pixelCanvas");
const mySize = document.querySelector("#sizePicker");
const myColor = document.querySelector("#colorPicker");
// Event Listener for when user submits the form

mySize.addEventListener("submit", function (event) {
  event.preventDefault();
  makeGrid();
});
function makeGrid() {
  myTable.innerHTML = "";
    // determines the grids height
  let height2 = document.querySelector("#inputHeight").value;
    //determines the grids width
  let width2 = document.querySelector("#inputWidth").value;
    //table element utilizing a nested for loop
  for (let i = 0; i < height2; i++) {
    let rows = document.createElement("tr");
    for (let j = 0; j < width2; j++) {
      let columns = document.createElement("td");
      rows.appendChild(columns);
        //listener for click inside grid which will let you choose background color
      columns.addEventListener("click", function (e) {
        e.target.style.backgroundColor = myColor.value;
      });
      myTable.appendChild(rows);
    }
  }
}
