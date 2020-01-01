let windowWidth = null;
let windowHeight = null;
let matrixWidth = null;
let matrixHeight = null;
const getEl = el => document.querySelector(`${el}`);
const getAllEl = el => document.querySelectorAll(`${el}`);
matrixItemsRender = () => {
    const matrixItems = getAllEl(".matrix-item");
    const matrixItemsDirection = getAllEl(".matrix-direction");
    matrixItemsDirection[0].style.top = 0;
    matrixItemsDirection[0].style.left = 0;
    matrixItemsDirection[0].style.width = `${matrixWidth/100*2}px`;
    matrixItemsDirection[0].style.height = `${matrixHeight/100*90}px`;
    matrixItemsDirection[1].style.bottom = 0;
    matrixItemsDirection[1].style.right = 0;
    matrixItemsDirection[1].style.width = `${matrixWidth/100*90}px`;
    matrixItemsDirection[1].style.height = `${matrixHeight/100*10}px`;
    matrixItems[0].style.top = 0;
    matrixItems[0].style.left = `${matrixWidth/100*10}px`;
    matrixItems[1].style.top = 0;
    matrixItems[1].style.right = 0;
    matrixItems[2].style.bottom = `${matrixHeight/100*10}px`;
    matrixItems[2].style.left = `${matrixWidth/100*10}px`;
    matrixItems[3].style.bottom = `${matrixHeight/100*10}px`;
    matrixItems[3].style.right = 0;
    matrixItems.forEach(el => {
        if (el.classList.contains("wh100")) {
            el.style.top = 0;
            el.style.left = 0;
            console.log(el);
        }
    });
};

const initWindow = () => {
    windowWidth = innerWidth;
    windowHeight = innerHeight;
    console.log(windowWidth, windowHeight);
    const container = getEl(".container");
    container.style.width = `${windowWidth}px`;
    container.style.height = `${windowHeight}px`;
    const matrix = getEl(".matrix");
    if (windowHeight > windowWidth) {
        matrixWidth = windowWidth / 100 * 80;
        matrixHeight = matrixWidth;
        matrix.style.width = `${windowWidth/100*80}px`;
        matrix.style.height = `${windowWidth/100*80}px`;
    } else {
        matrixWidth = windowHeight / 100 * 80;
        matrixHeight = matrixWidth;
    }
    matrix.style.width = `${matrixWidth}px`;
    matrix.style.height = `${matrixHeight}px`;
    matrixItemsRender();
    // const matrixItemDesc = getEl(".matrix-item-description");
    // const matrixItemDescText = getAllEl(".matrix-item-description-text");
    // matrixItemDescText.forEach(item => {
    //     item.style.fontSize = `${matrix.style.height.replace("px","")/100*6}px`;
    //     console.log(item.style.fontSize);
    // })
    console.log(matrix.style.height.replace("px", ""));
}
const clickMatrixItem = () => {
    getAllEl(".matrix-item").forEach((el, key) => {
        el.addEventListener("click", () => {
            // if (el.classList.contains("wh100")) {
            //     el.classList.remove("wh100");
            //     el.firstElementChild.style.opacity = 0;
            //     matrixItemsRender();
            //     setTimeout(() => {
            //         el.classList.remove("index999");
            //     }, 1000);

            // } else 
            if (!el.classList.contains("wh100")){

                if (key == 0) {
                    el.style.left = 0;
                }
                if (key == 2) {
                    el.style.left = 0;
                    el.style.bottom = 0;
                }
                if (key == 3) {
                    el.style.bottom = 0;
                }
                el.classList.add("wh100", "index999");

                setTimeout(() => {
                    el.firstElementChild.style.opacity = 100;
                }, 1000);
                console.dir(el);
            }
        });
        el.firstElementChild.addEventListener("click", el => {
            el.stopPropagation();
            if (el.toElement.parentElement.classList.contains("wh100")) {
                el.toElement.parentElement.classList.remove("wh100");
                el.toElement.style.opacity = 0;
                matrixItemsRender();
                setTimeout(() => {
                    el.toElement.parentElement.classList.remove("index999");
                }, 1000);
            }
            console.dir(el.toElement.parentElement);
        });

    });
}
//
clickMatrixItem();
initWindow();
addEventListener("resize", initWindow);