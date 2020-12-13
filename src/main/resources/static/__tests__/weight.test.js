const modul = require('../conversionTools/weight/weight.js');

describe('Test the correct outputs of weight calculation', () => {
  document.body.innerHTML = `
                <label id="weight_value">Enter the weight</label>
<select name="conversion_value" id="conversion_value">
                  <option value="Kilogram">Kilogram [kg]</option>
                  <option value="Gram">Gram [g]</option>
                  <option value="Ounes">Ounes[oz]</option>
                  <option value="Pounds">Pounds[lb]</option>
                  <option value="Stone">Stone[st]</option>
                  <option value="Tonnes">Tonnes[t]</option>
                </select>
        <select name="conversion_result" id="conversion_result">                            
                  <option value="Gram">Gram [g]</option>
                  <option value="Ounes">Ounes[oz]</option>
                  <option value="Pounds">Pounds[lb]</option>
                  <option value="Stone">Stone[st]</option>
                  <option value="Tonnes">Tonnes[t]</option>
                  <option value="Kilogram">Kilogram [kg]</option>
                </select>
                 <label id="weight_result">Result</label>
  `;

  let conversion_value=document.getElementById("conversion_value");
  let conversion_result=document.getElementById("conversion_result");
  //getting the value of  weight
  let weight_value=document.getElementById("weight_value");
  let weight_result=document.getElementById("weight_result");


  test('Test the correct outputs of weight calculation (Kg->g)', () => {

    weight_result.value = "";
    weight_value.value = "55";
    conversion_value.value = conversion_value.options[0].value;
    conversion_result.value = conversion_result.options[0].value;

    modul.convertweight();
    expect(weight_result.value).toEqual("55000.00");

  });

  test('Test the correct outputs of weight calculation with zero', () => {

    weight_result.value = "";
    weight_value.value = "0";
    conversion_value.value = conversion_value.options[1].value;
    conversion_result.value = conversion_result.options[4].value;

    modul.convertweight();
    expect(weight_result.value).toEqual("0.00");

  });

  test('Test the correct outputs of weight calculation with zero', () => {

    weight_result.value = "";
    weight_value.value = "0";
    conversion_value.value = conversion_value.options[3].value;
    conversion_result.value = conversion_result.options[3].value;

    modul.convertweight();
    expect(weight_result.value).toEqual("0.00");

  });

  test('Test the correct outputs of weight calculation (g->Kg)', () => {

    weight_result.value = "";
    weight_value.value = "12000";
    conversion_value.value = conversion_value.options[1].value;
    conversion_result.value = conversion_result.options[5].value;

    modul.convertweight();
    expect(weight_result.value).toEqual("12.00");

  });

  test('Test the correct outputs of weight calculation with bad input', () => {

    weight_result.value = "";
    weight_value.value = "x02f";
    conversion_value.value = conversion_value.options[1].value;
    conversion_result.value = conversion_result.options[3].value;

    modul.convertweight();
    expect(weight_result.value).toEqual("Enter a valid number");

  });

});

