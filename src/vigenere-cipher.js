class VigenereCipheringMachine {
  reversed;
  constructor(boool){
    
    if(boool = undefined){
      this.reversed = !boool;
    }
    else{
      this.reversed = !boool;
    }
  }

  encrypt(message, key) {
    if(message == undefined || key == undefined){
      throw new Error('Error');
    }
    var encryptedCode = "";
    var encrypted = "";
    var keystr = "";
    for(var i = 0, j = 0; i < message.length; i++, j++){
      if(j == key.length){
        j = 0;
      }
      keystr += key[j].toLowerCase();
      encryptedCode = keystr.charCodeAt(i) - 96 + message.charCodeAt(i) - 96;
      encrypted += String.fromCharCode(encryptedCode);
    }
    switch(this.reversed){
      case true:
        encrypted.split('').reverse().join('')
        break;
      case false:
        break;
    }
    return encrypted.toUpperCase();
  }

  decrypt(encryptedMessage, key) {
    if(encryptedMessage == undefined || key == undefined){
      throw new Error('Error');
    }
    var decrypted = "";
    var encrypted = encryptedMessage.toLowerCase();
    for(var i = 0; i < encryptedMessage.length; i++){
      var encryptedCode = encrypted.charCodeAt(i) - 96 - key.charCodeAt(i) - 96;
      decrypted += String.fromCharCode(encryptedCode);
    }
    switch(this.reversed){
      case true:
        decrypted.split('').reverse().join('');
        break;
      case false:
        break;
    }
    return decrypted;
  }
}

module.exports = VigenereCipheringMachine;
