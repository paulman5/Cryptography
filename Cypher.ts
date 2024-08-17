let emperor_message = "NHAG JBEEL CHMMYR XVJV"
let emperor_messagesplit = emperor_message.split("")

console.log(emperor_messagesplit)

for (let cipher_counter = 1; cipher_counter <= 26; cipher_counter++) {
  let decryptedmessage = ""
  for (let i = 0; i < emperor_messagesplit.length; i++) {
    let lowerbound = 65
    let asciiValue = emperor_messagesplit[i].charCodeAt(0)
    if (asciiValue - cipher_counter <= lowerbound) {
      let newAsciiValue = asciiValue - cipher_counter + 26
      console.log(newAsciiValue)
      decryptedmessage += String.fromCharCode(newAsciiValue)
    } else {
      let newAsciiValue = asciiValue - cipher_counter
      decryptedmessage += String.fromCharCode(newAsciiValue)
    }
  }
  console.log(decryptedmessage)
}
