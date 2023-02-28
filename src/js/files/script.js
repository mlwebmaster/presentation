// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Price Range
const rangeSlider = document.getElementById('range-slider'),
input0 = document.getElementById('input0'),
input1 = document.getElementById('input1');

const inputs = [input0, input1];

if (rangeSlider) {
   noUiSlider.create(rangeSlider, {
      start: [500, 10000],
      connect: true,
      step: 1,
      range: {
          'min': [500],
          'max': [10000]
      }
  });

  rangeSlider.noUiSlider.on('update', function(values, handle){
   inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
   let arr = [null, null];
   arr[i] = value;
   rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
   el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
   })
  });









}