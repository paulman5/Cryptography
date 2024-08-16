let emperor_message = "NHAG JBEEL CHMMYR XVJV"
let emperor_messagesplit = emperor_message.split("")

for (let cipher_counter = 1; cipher_counter <= 26; cipher_counter++) {
  let decryptedmessage = ""
  for (let i = 0; i < emperor_messagesplit.length; i++) {
    let asciiValue = emperor_messagesplit[i].charCodeAt(0)
    let newAsciiValue = asciiValue - cipher_counter
    console.log(newAsciiValue)
    decryptedmessage += String.fromCharCode(newAsciiValue)
  }
  console.log(decryptedmessage)
}
