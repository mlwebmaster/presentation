// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Price Range
const rangeSlider = document.getElementById('range-slider'),
input0 = document.getElementById('input0'),
input1 = document.getElementById('input1');

const rangeSlider2 = document.getElementById('range-slider2'),
input3 = document.getElementById('input3'),
input4 = document.getElementById('input4');

const inputs = [input0, input1];
const inputs2 = [input3, input4];

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


if (rangeSlider2) {
   noUiSlider.create(rangeSlider2, {
      start: [500, 10000],
      connect: true,
      step: 1,
      range: {
          'min': [500],
          'max': [10000]
      }
  });

  rangeSlider2.noUiSlider.on('update', function(values, handle){
   inputs2[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
   let arr = [null, null];
   arr[i] = value;
   rangeSlider.noUiSlider.set(arr);
  };

  inputs2.forEach((el, index) => {
   el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
   })
  });
}