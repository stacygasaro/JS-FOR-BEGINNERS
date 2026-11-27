/*D6 ★★★ Password strength. Write strength(password) : it is "Strong" when it has at
least 8 characters, at least one digit and at least one capital letter; otherwise "Weak".
Check each character in a loop. Test: "Kigali2026", "kigali2026", "Kig2", "KIGALIRWANDA"*/
function strength(password) {
  if (password.length < 8) {
    return "Weak";
  }

  let hasDigit = false;
  let hasUpper = false;

  for (let i = 0; i < password.length; i++) {
    const ch = password[i];
    if (ch >= "0" && ch <= "9") {
      hasDigit = true;
    } else if (ch >= "A" && ch <= "Z") {
      hasUpper = true;
    }
  }

  return hasDigit && hasUpper ? "Strong" : "Weak";
}

console.log(strength("Kigali2026"));   // "Strong"
console.log(strength("kigali2026"));   // "Weak" (no capital letter)
console.log(strength("Kig2"));         // "Weak" (shorter than 8 characters)
console.log(strength("KIGALIRWANDA")); // "Weak" (no digit)