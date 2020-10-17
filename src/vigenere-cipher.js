const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encrypted_message = "";
    let keyPosition = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) === -1) {
        encrypted_message += message[i];
      } else {
        encrypted_message += this.alphabet[(this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[keyPosition])) % 26];
        keyPosition = ++keyPosition % key.length;
      }
    }

    if (this.direct) return encrypted_message;
    return [...encrypted_message].reverse().join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();

    let decrypted_message = "";
    let keyPosition = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) === -1) {
        decrypted_message += message[i];
      } else {
        let position =
          this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(key[keyPosition]);
        if (position < 0) position += 26;
        decrypted_message += this.alphabet[position];

        keyPosition = ++keyPosition % key.length;
      }
    }

    if (this.direct) return decrypted_message;
    return [...decrypted_message].reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;