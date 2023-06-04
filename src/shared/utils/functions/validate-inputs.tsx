import { regexEmail, regexNumber } from "../data/regex";

export const validateEmptyParams = (query) => {
  if (query.length == 0) {
    return console.log("invalido");
  } else {
    console.log("ss");
  }
};

export function validateInputs(value) {
  if (value == undefined || value == "" || !value) {
    return false;
  } else return true;
}

export function isNumeric(value) {
  if (!value.match(regexNumber)) {
    return false;
  } else return true;
}

export function validateEmail(value) {
  if (!value.match(regexEmail)) {
    return false;
  } else return true;
}
// export function validateMultiple(value) {
//   Object.keys(value).forEach(
//     (e) =>
//       value[e] == undefined || value[e] == "" || !value[e] || delete value[e]
//   );
//   return value;
// }
