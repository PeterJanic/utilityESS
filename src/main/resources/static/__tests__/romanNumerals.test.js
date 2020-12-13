const modul = require('../mathmeticalTools/romanNumerals/romanNumerals.js');

describe('Test the correct outputs of romanNumerals calculation', () => {
  document.body.innerHTML = `
            <label class='text-body mt-3' id="numeric_value"><h5 class="text-center mx-auto">Enter the number: </h5></label>
              <p class="mx-auto p-3 overflow-auto text-body text-center text-break" id="result_container"></p>
  `;

  let num_value = document.getElementById("numeric_value");
  let resultContainer = document.getElementById("result_container");


  test('Test the correct outputs of romanNumerals calculation', () => {

    num_value.value = "60";

    modul.toRomanNum();
    expect(resultContainer.innerText).toEqual("LX");

  });

  test('Test the correct outputs of romanNumerals calculation with bad input', () => {

    num_value.value = "6s0";

    modul.toRomanNum();
    expect(resultContainer.innerText).toEqual("");

  });

  test('Test the correct outputs of romanNumerals calculation with 0', () => {

    num_value.value = "0";

    modul.toRomanNum();
    expect(resultContainer.innerText).toEqual("");

  });

  test('Test the correct outputs of romanNumerals calculation with high num', () => {

    num_value.value = "2020";

    modul.toRomanNum();
    expect(resultContainer.innerText).toEqual("MMXX");

  });

});

