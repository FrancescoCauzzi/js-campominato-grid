let myContainerEl = document.querySelector(".__main-my-container-fluid");

console.log(myContainerEl);
let elementToAppend;
function generateSquareGrid(row, className, elementRecevingAppend) {
  for (let i = 0; i < row ** 2; i++) {
    elementToAppend = document.createElement("div");
    elementToAppend.classList.add(className);
    elementToAppend.style.width = `calc(100% / ${row})`;
    console.log(elementToAppend.offsetWidth);

    elementRecevingAppend.append(elementToAppend);
  }
  // for (let i = 0; i < row ** 2; i++) {
  // }
  //let elementToAppendWidth = elementToAppend.offsetWidth;
  //elementToAppend.style.heigth = elementToAppendWidth + "px";
  elementToAppend.style.heigth = elementToAppend.offsetWidth;
  console.log(elementToAppend.offsetWidth);
}

generateSquareGrid(10, "__cella", myContainerEl);

// let cardHeight = newDivElement.offsetWidth;
//   newDivElement.style.height = cardHeight + "px";
