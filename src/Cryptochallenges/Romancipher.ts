let emperor_message = "LYFCYZ VLUWEYN YRUWN JIHS"
let emperor_messagesplit = emperor_message.split("")

console.log(emperor_messagesplit)

// Primitive for moving ASCII characters up
for (let shift = 1; shift < 26; shift++) {
  let decryptedmessage = ""
  for (let i = 0; i < emperor_messagesplit.length; i++) {
    let newAsciivalue = String.fromCharCode(
      ((emperor_messagesplit[i].charCodeAt(0) + shift - 65) % 26) + 65
    )
    decryptedmessage += newAsciivalue
  }
  console.log(decryptedmessage)
}

// Primitive for moving ASCII charachters down
for (let shift = 1; shift < 26; shift++) {
  let decryptedmessage = ""
  for (let i = 0; i < emperor_messagesplit.length; i++) {
    let asciiValue = emperor_messagesplit[i].charCodeAt(0)
    let newAsciiValue
    if (asciiValue - shift < 65) {
      newAsciiValue = 90 - (65 - (asciiValue - shift)) + 1
    } else {
      newAsciiValue = asciiValue - shift
    }
    decryptedmessage += String.fromCharCode(newAsciiValue)
  }
  console.log(decryptedmessage)
}
