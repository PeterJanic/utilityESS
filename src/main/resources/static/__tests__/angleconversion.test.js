const angle = require('../conversionTools/Angle_Conversion/angleconversion.js');

test('Test the correct outputs of angle conversion', () => {
  document.body.innerHTML = `
    <span id="outputDegree"></span>
    <span id="outputRadian"></span>
  `;

  const outputDegree = document.getElementById('outputDegree');
  const outputRadian = document.getElementById('outputRadian');

  angle.degangleConverter(0)
  expect(outputRadian.innerHTML).toEqual("0"); //or toBe

  angle.radangleConverter(0)
  expect(outputDegree.innerHTML).toEqual("0");

});
