let myContainerEl = document.querySelector(".__my-container");

console.log(myContainerEl);

function generateSquareGrid(row, className, elementRecevingAppend) {
  for (let i = 0; i < row ** 2; i++) {
    let elementToAppend = document.createElement("div");
    elementToAppend.classList.add(className);
    elementToAppend.style.width = `calc(100% / ${row})`;
    elementToAppend.style.height = `calc(100% / ${row})`;
    elementToAppend.innerHTML = `${i + 1}`;
    elementRecevingAppend.append(elementToAppend);
    elementToAppend.addEventListener("click", function () {
      console.log(elementToAppend.innerHTML);
    });

    // elementToAppend.style.heigth = elementToAppend.offsetWidth + "px";
  }

  // for (let i = 0; i < row ** 2; i++) {
  // }
  //let elementToAppendWidth = elementToAppend.offsetWidth;
  //elementToAppend.style.heigth = elementToAppendWidth + "px";
}

generateSquareGrid(10, "__cella", myContainerEl);

// let cardHeight = newDivElement.offsetWidth;
//   newDivElement.style.height = cardHeight + "px";
