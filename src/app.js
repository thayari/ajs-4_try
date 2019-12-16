export default function checkNumber(input) {
  let output = 0;
  const inputValue = Number(input);
  try {
    if (!Number.isNaN(inputValue) && Number.isInteger(inputValue) && input[0] !== '0') {
      output = inputValue;
    } else {
      throw new Error(`${input} is not a proper number`);
    }
  } catch (err) {
    console.error(err);
  }
  return output;
}
