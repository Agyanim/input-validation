const colorGeneratorBtn = document.getElementById("color-generator-btn");
const selectColor = [
    "#bde0fe",
    "#023047",
    "#ffb703",
    "#ffbe0b",
    "#588157",
    "#00b4d8",
    "d90429",
    "#e76f51",
    "#cb997e",
    "#080708",
    "#9d8189",
    "#ffd60a",
    "#4f000b",
  ];

const rand=()=>{
let randomSelector= Math.floor(Math.random()*selectColor.length) ;
return randomSelector;
};

const randomColorGenerator = () => {
  const colorScreen = document.getElementById("color-screen");
  let x=rand();
  colorScreen.style.backgroundColor = selectColor[x];
};

colorGeneratorBtn.addEventListener("click", function () {
  randomColorGenerator();
});
