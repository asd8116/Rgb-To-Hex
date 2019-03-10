const redInput = document.querySelector("#red");
const greenInput = document.querySelector("#green");
const blueInput = document.querySelector("#blue");
const convToHex = document.querySelector('#convToHex')
const hexInput = document.querySelector("#hex");
const box = document.querySelector(".res-square");

// 輸入值數字範圍0~255
function convRgbValToInt(rgbValue) {
  let rgbInt = parseInt(rgbValue);
  if (rgbInt >= 0 && rgbInt <= 255) {
    return rgbInt
  }
}

// 進行RGB轉化成HEX
function componentToHex(value) {
  let hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// listen to convert
convToHex.addEventListener('click', (event) => {
  let r = convRgbValToInt(redInput.value),
    g = convRgbValToInt(greenInput.value),
    b = convRgbValToInt(blueInput.value)

  // 判斷條件是否符合
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    hexInput.value = 'Error: Values for R, G, B should be from 0 to 255 only!';
  } else {
    // 輸入數字得到結果
    let hexStr = rgbToHex(r, g, b);
    hexInput.value = hexStr;
    box.style.backgroundColor = hexStr;
  }
})