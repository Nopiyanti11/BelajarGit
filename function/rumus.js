export function kalkulator(angka1, angka2, operator) {
  switch (operator) {
    case "+":
      return angka1 + angka2;
      case "-":
      return angka1 - angka2;
      case "/":
      return angka1 / angka2;
      case "*":
      return angka1 * angka2;
  

    // tambahkan case untuk pengurangan
    // tambahkan case untuk pembagian
    // tambahkan case untuk perkalian
    default:
      return "Operator tidak valid!";
  }
}
