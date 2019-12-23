let windowWidth = null;
let windowHeight = null;
const getEl = el => document.querySelector(`${el}`);
const getAllEl = el => document.querySelectorAll(`${el}`);
const initWindow = () => {
    windowWidth = innerWidth;
    windowHeight = innerHeight;
    console.log(windowWidth,windowHeight);
    const container = getEl(".container");
container.style.width = `${windowWidth}px`;
container.style.height = `${windowHeight}px`;
const matrix = getEl(".matrix");
if (windowHeight > windowWidth) {
    matrix.style.width = `${windowWidth/100*80}px`;
    matrix.style.height = `${windowWidth/100*80}px`;
} else {
    matrix.style.width = `${windowHeight/100*80}px`;
    matrix.style.height = `${windowHeight/100*80}px`;
}
const matrixItem = getEl(".matrix-item");
const matrixItemDesc = getEl(".matrix-item-description");
const matrixItemDescText = getAllEl(".matrix-item-description-text");
matrixItemDescText.forEach(item => {
    item.style.fontSize = `${matrix.style.height.replace("px","")/100*6}px`;
    console.log(item.style.fontSize);
})
console.log(matrix.style.height.replace("px",""));
}
initWindow();
addEventListener("resize", () => {
    initWindow();
});
