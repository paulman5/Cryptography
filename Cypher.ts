let emperor_message = "NHAG JBEEL CHMMYR XVJV"
let emperor_messagesplit = emperor_message.split("")

console.log(emperor_messagesplit)

for (let shift = 1; shift <= 26; shift++) {
  let decryptedmessage = ""
  for (let i = 0; i < emperor_messagesplit.length; i++) {
    let newAsciivalue = String.fromCharCode(
      ((emperor_messagesplit[i].charCodeAt(0) + shift - 65) % 26) + 65
    )
    decryptedmessage += newAsciivalue
  }
  console.log(decryptedmessage)
}
