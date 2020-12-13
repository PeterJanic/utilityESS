const fuel = require('../conversionTools/fuelEfficiency/fuel.js');

describe('Test the correct outputs of fuelEfficiency calculation', () => {
  document.body.innerHTML = `
        <input id="miles" type="number" placeholder="Miles"/>
        <input id="gallons" type="number" placeholder="Gallons"/>
        <label id="mpgs">
  `;


  var miles = document.getElementById("miles");
  var gallons = document.getElementById("gallons");
  var result_store = document.getElementById("mpgs");

  test('Test the correct outputs of fuelEfficiency calculation', () => {

    result_store.innerHTML = "";

    miles.value = 55;
    gallons.value = 2;

    fuel.calculateMPG();


    expect(result_store.innerHTML).toEqual("27.50");


  });

  test('Test the correct outputs of fuelEfficiency calculation', () => {
    result_store.innerHTML = "";

    miles.value = -10;
    gallons.value = 2;

    fuel.calculateMPG();


    expect(result_store.innerHTML).toEqual("");
  });

  test('Test the correct outputs of fuelEfficiency calculation', () => {
    result_store.innerHTML = "";

    miles.value = 3;
    gallons.value = -10;

    fuel.calculateMPG();


    expect(result_store.innerHTML).toEqual("");
  });

  test('Test the correct outputs of fuelEfficiency calculation', () => {
    result_store.innerHTML = "";

    miles.value = -3;
    gallons.value = -10;

    fuel.calculateMPG();


    expect(result_store.innerHTML).toEqual("");
  });

});


// TODO: remove
// const length = require('../conversionTools/length/length.js');
//
// test('Test the correct outputs of angle conversion', () => {
//   document.body.innerHTML = `
//             <input type="text" id="input">
//                         <input type="text" id="result">
// <select id="inputType">
//                <option value="Meter">Meter</option>
//                <option value="Kilometer">Kilometer</option>
//                <option value="Centimeter">Centimeter</option>
//                <option value="Millimetre">Millimetre</option>
//                <option value="Mile">Mile</option>
//                <option value="Yard">Yard</option>
//                <option value="Foot">Foot</option>
//                <option value="Inch">Inch</option>
//                <option value="Nautical Mile">Nautical Mile</option>
//             </select>
//            <select id="resultType">
//                <option value="Meter">Meter</option>
//                <option value="Kilometer">Kilometer</option>
//                <option value="Centimeter">Centimeter</option>
//                <option value="Millimetre">Millimetre</option>
//                <option value="Mile">Mile</option>
//                <option value="Yard">Yard</option>
//                <option value="Foot">Foot</option>
//                <option value="Inch">Inch</option>
//                <option value="Nautical Mile">Nautical Mile</option>
//             </select>
//   `;
//
//
//   var input = document.getElementById('input');
//   var result = document.getElementById('result');
//   var inputType = document.getElementById('inputType');
//   var resultType = document.getElementById('resultType');
//
//   inputType.value = inputType.options[0].value;
//   inputType.resultType = resultType.options[1].value;
//
//
//   input.value = 100
//
//   length.myResult();
//
//   expect(result.innerHTML).toEqual("0.1"); //or toBe
//
//   // angle.radangleConverter(0)
//   // expect(outputDegree.innerHTML).toEqual("0");
//
// });
