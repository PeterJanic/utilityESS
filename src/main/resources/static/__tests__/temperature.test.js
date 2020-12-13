const modul = require('../conversionTools/temperture/temperture.js');

describe('Test the correct outputs of temperature calculation', () => {
  document.body.innerHTML = `
                        <label id="temperture_value">Enter the temperture</label>
<select name="conversion_value" id="conversion_value">
                  <option value="Fahrenheit">Fahrenheit</option>
                  <option value="Celsius">Celsius</option>
                  <option value="Kelvin">Kelvin</option>
                </select>
        <select name="conversion_result" id="conversion_result">                  
                  <option value="Celsius">Celsius</option>
                  <option value="Kelvin">Kelvin</option>
                  <option value="Fahrenheit">Fahrenheit</option>
                </select>
                        <label id="temperture_result">Result</label>
              
  `;

  let conversion_value=document.getElementById("conversion_value");
  let conversion_result=document.getElementById("conversion_result");
  //getting the value of  temperture
  let temperture_value=document.getElementById("temperture_value");
  let temperture_result=document.getElementById("temperture_result");


  test('Test the correct outputs of temperature calculation', () => {

    temperture_result.value = "";
    temperture_value.value = "55";
    conversion_value.value = conversion_value.options[0].value;
    conversion_result.value = conversion_result.options[2].value;

    modul.converttemperture();
    expect(temperture_result.value).toEqual("55.00");

  });

  test('Test the correct outputs of temperature calculation', () => {

    temperture_result.value = "";
    temperture_value.value = "55";
    conversion_value.value = conversion_value.options[0].value;
    conversion_result.value = conversion_result.options[0].value;

    modul.converttemperture();
    expect(temperture_result.value).toEqual("12.78");

  });

  test('Test the correct outputs of temperature calculation', () => {

    temperture_result.value = "";
    temperture_value.value = "55";
    conversion_value.value = conversion_value.options[0].value;
    conversion_result.value = conversion_result.options[1].value;

    modul.converttemperture();
    expect(temperture_result.value).toEqual("285.93");

  });

  test('Test the correct outputs of temperature calculation (C->F)', () => {

    temperture_result.value = "";
    temperture_value.value = "0";
    conversion_value.value = conversion_value.options[1].value;
    conversion_result.value = conversion_result.options[2].value;

    modul.converttemperture();
    expect(temperture_result.value).toEqual("32.00");

  });

  test('Test the correct outputs of temperature calculation (C->C)', () => {

    temperture_result.value = "";
    temperture_value.value = "0";
    conversion_value.value = conversion_value.options[1].value;
    conversion_result.value = conversion_result.options[0].value;

    modul.converttemperture();
    expect(temperture_result.value).toEqual("0.00");

  });

  test('Test the correct outputs of temperature calculation (K->F)', () => {

    temperture_result.value = "";
    temperture_value.value = "0";
    conversion_value.value = conversion_value.options[2].value;
    conversion_result.value = conversion_result.options[2].value;

    modul.converttemperture();
    expect(temperture_result.value).toEqual("-459.67");

  });

  test('Test the correct outputs of temperature calculation (K->K)', () => {

    temperture_result.value = "";
    temperture_value.value = "0";
    conversion_value.value = conversion_value.options[2].value;
    conversion_result.value = conversion_result.options[1].value;

    modul.converttemperture();
    expect(temperture_result.value).toEqual("0.00");

  });

  test('Test the correct outputs of temperature calculation (K->C)', () => {

    temperture_result.value = "";
    temperture_value.value = "0";
    conversion_value.value = conversion_value.options[2].value;
    conversion_result.value = conversion_result.options[0].value;

    modul.converttemperture();
    expect(temperture_result.value).toEqual("-273.15");

  });

  test('Test the correct outputs of temperature calculation (C->K)', () => {

    temperture_result.value = "";
    temperture_value.value = "0";
    conversion_value.value = conversion_value.options[1].value;
    conversion_result.value = conversion_result.options[1].value;

    modul.converttemperture();
    expect(temperture_result.value).toEqual("273.15");
  });

  test('Test the correct outputs of temperature calculation (C->K)', () => {

    temperture_result.value = "";
    temperture_value.value = "0x";
    conversion_value.value = conversion_value.options[1].value;
    conversion_result.value = conversion_result.options[1].value;

    modul.converttemperture();
    expect(temperture_result.value).toEqual("Enter a valid number");
  });

});

