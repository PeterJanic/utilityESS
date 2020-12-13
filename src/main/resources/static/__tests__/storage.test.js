const storage = require('../conversionTools/storage/storage.js');

test('Expect b to equal [1, 0]', () => {
  const expected = [1, 0];
  var data = storage.get_map_position("b");
  expect(data).toEqual(expected);
});

test('Expect B to equal [3, 0]', () => {
  const expected = [3, 0];
  expect(storage.get_map_position("B")).toEqual(expected);
});

test('Expect Tbit to equal [1, 4]', () => {
  const expected = [1, 4];
  expect(storage.get_map_position("Tbit")).toEqual(expected);
});

test('Expect TB to equal [3, 4]', () => {
  const expected = [3, 4];
  expect(storage.get_map_position("TB")).toEqual(expected);
});

test('Expect GiB to equal [4, 2]', () => {
  const expected = [4, 3];
  expect(storage.get_map_position("GiB")).toEqual(expected);
});

test('Expect Yibit to equal [2, 8]', () => {
  const expected = [2, 8];
  expect(storage.get_map_position("Yibit")).toEqual(expected);
});


describe('Test the correct outputs of storage conversion', () => {
  // recreate some DOM elements and its data
  // also store into variables
  document.body.innerHTML = `
      <select class="storage_dropdown" name="conversion_value" id="conversion_value">
          <option value="b">bits [b]</option>
          <option value="B">Bytes [B]</option>
      </select>
      <select class="storage_dropdown" name="conversion_result" id="conversion_result">                  
          <option value="b">bits [b]</option>
          <option value="B">Bytes [B]</option>
      </select>
      <label id="storage_value">Enter the value</label>
      <label id="storage_result">Result</label>
    `;

  let conversion_input = document.getElementById("conversion_value");
  let conversion_output = document.getElementById("conversion_result");

  let storage_value = document.getElementById("storage_value");
  let storage_result = document.getElementById("storage_result");

  test('Test conversion from b -> B', () => {
    conversion_input.value = "b"//conversion_input.options[0].value;
    conversion_output.value = "B"//conversion_output.options[1].value;
    storage_value.value = 8;

    storage.convertStorage();
    expect(storage_result.value).toEqual(1);

  });

  test('Test conversion from B -> b', () => {
    conversion_input.value = "B"
    conversion_output.value = "b"
    storage_value.value = 1000;

    storage.convertStorage();
    expect(storage_result.value).toEqual(8000);

  });

});