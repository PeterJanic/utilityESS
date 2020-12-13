// const speed = require('../conversionTools/speed/speed.js');
const modul = require('../conversionTools/speed/speed');

describe('Test the correct outputs of speed calculation', () => {
  document.body.innerHTML = `
        <input id="idSpeedInput" type="number" class="form-control"
                            aria-label="Text input with dropdown button" style="text-align: center;">
        <select name="speedNameOne" id="speedOne">
                                <option value="km/h">km/h</option>
                                <option value="m/s">m/s</option>
                                <option value="mph">mph</option>
                                <option value="ft/s">ft/s</option>
                                <option value="knots">knots</option>
                            </select>
        <select name="speedNameTwo" id="speedTwo">
                                <option value="km/h">km/h</option>
                                <option value="m/s">m/s</option>
                                <option value="mph">mph</option>
                                <option value="ft/s">ft/s</option>
                                <option value="knots">knots</option>
                            </select>
        <output id="idResult" type="text" class="form-control"
            aria-label="Text input with dropdown button"></output>                   
  `;


  var speed = document.getElementById("idSpeedInput");
  var from = document.getElementById("speedOne");
  var to = document.getElementById("speedTwo");

  var Result = document.getElementById("idResult");


  test('Test the correct outputs of speed calculation', () => {

    Result.innerHTML = "";
    speed.value = 55;
    from.value = from.options[0].value;
    to.value = to.options[0].value;

    modul.convertSpeed();
    expect(Result.innerHTML).toEqual("55");


  });

  test('Test the correct outputs of speed calculation', () => {

    Result.innerHTML = "";
    speed.value = 0;
    from.value = from.options[1].value;
    to.value = to.options[3].value;

    modul.convertSpeed();

    expect(Result.innerHTML).toEqual("0");

  });

//   km/h
// m/s
//   mph
// ft/s<
// knots"

  test('Test the correct outputs of speed calculation', () => {

    Result.innerHTML = "";
    speed.value = 2.4;
    from.value = from.options[2].value;
    to.value = to.options[3].value;
    modul.convertSpeed();

    expect(Result.innerHTML).toEqual("3.52");

  });

  test('Test the correct outputs of speed calculation', () => {

    Result.innerHTML = "";
    speed.value = 3.6;
    from.value = from.options[0].value;
    to.value = to.options[1].value;
    modul.convertSpeed();

    expect(Result.innerHTML).toEqual("1");

  });

  test('Test the correct outputs of speed calculation', () => {

    Result.innerHTML = "";
    speed.value = 36;
    from.value = from.options[0].value;
    to.value = to.options[1].value;
    modul.convertSpeed();

    expect(Result.innerHTML).toEqual("10");

  });

  test('Test the correct outputs of speed calculation', () => {

    Result.innerHTML = "";
    speed.value = 10;
    from.value = from.options[1].value;
    to.value = to.options[0].value;
    modul.convertSpeed();

    expect(Result.innerHTML).toEqual("36");

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
