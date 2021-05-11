// Modules Imports
import FruitsGetInfo from "./Logic/FruitsGetInfo.js";
import config from "./Logic/LogicHtmlConteiner.js";

// Var Conexion
let inputValue = document.getElementById("fruits");
const fruitsDates = document.getElementsByClassName("conteiner-fruits");
let addFruit = document.getElementById("new-Fruits");
let addConteiner = document.getElementsByClassName("newValue");
let closedPage = document.getElementById("close");
const searchConteinerPage =
  document.getElementsByClassName("initial-conteiner");
let valueAddFruitsInfo = document.getElementsByClassName("new-value");
let saveNewFruits = document.getElementById("saveDate");

//Transform Dates Fruits
const datesInfoFruits = FruitsGetInfo.map((item) => {
  return (item.description = config.logicHtmlConteiner(item.img, item.id));
});
fruitsDates[0].innerHTML = datesInfoFruits;

// Filter Logic
const getFilterData = (value) => {
  let getData = [...FruitsGetInfo];
  let filterDates = getData.filter((item) => {
    return item.id.toLowerCase().includes(value);
  });
  let datesMapFruits = filterDates.map((item) => {
    return (item.description = config.logicHtmlConteiner(item.img, item.id));
  });
  return datesMapFruits;
};

// Method Call
function dateChange() {
  let valueID = inputValue.value;
  if (getFilterData(valueID.toLowerCase()).length > 0) {
    fruitsDates[0].innerHTML = getFilterData(valueID.toLowerCase());
  } else {
    fruitsDates[0].innerHTML = config.notFound(valueID);
  }
}
function newFruit() {
  addConteiner[0].style.display = "block";
  searchConteinerPage[0].style.display = "none";
  fruitsDates[0].style.display = "none";
  console.log(closedPage);
}
function closedWindow() {
  addConteiner[0].style.display = "none";
  searchConteinerPage[0].style.display = "flex";
  fruitsDates[0].style.display = "block";
}
function newFruitCheck() {
  let getDataFruits = [...valueAddFruitsInfo];
  let newFruits = getDataFruits.map((item) => {
    return item.value;
  });
  console.log(newFruits);
  FruitsGetInfo.unshift({ id: newFruits[0], img: newFruits[1] });
  fruitsDates[0].innerHTML = datesInfoFruits;
  console.log(FruitsGetInfo.length);
  setTimeout(() => {
    addConteiner[0].style.display = "none";
    searchConteinerPage[0].style.display = "flex";
    fruitsDates[0].style.display = "block";
  }, 2000);
}

// Event Call
inputValue.addEventListener("keyup", dateChange);

// Event New Call
addFruit.addEventListener("click", newFruit);

closedPage.addEventListener("click", closedWindow);

saveNewFruits.addEventListener("click", newFruitCheck);
