"use strict";
const image = document.querySelector('#image');

const opacityRange = document.querySelector('#opacity-range');
const borderRadiusRange = document.querySelector('#border-radius-range');
const updateImageStyle = () => {
  image.style.opacity = opacityRange.value;
  image.style.borderRadius = `${borderRadiusRange.value}px`;
  localStorage.setItem("opacity", opacityRange.value);
  localStorage.setItem("borderRadius", borderRadiusRange.value);
}
if(localStorage.getItem("opacity") !== null) {
  opacityRange.value = localStorage.getItem("opacity");
  image.style.opacity = opacityRange.value;
}

if(localStorage.getItem("borderRadius") !== null) {
  borderRadiusRange.value = localStorage.getItem("borderRadius");
  image.style.borderRadius = `${borderRadiusRange.value}px`;
}
opacityRange.addEventListener("input", updateImageStyle);
borderRadiusRange.addEventListener("input", updateImageStyle);