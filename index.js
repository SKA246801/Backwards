let encodeInput = document.querySelector("#encode-input")
let decodeInput = document.querySelector("#decode-input")
let encodeOutput = document.querySelector("#encode-output")
let decodeOutput = document.querySelector("#decode-output")
let encodeBtn = document.querySelector("#encode-btn")
let decodeBtn = document.querySelector("#decode-btn")

function reverseWordsInSentence(sentence) {
  var words = sentence.split(" ")
  var newSentence = ""
  for (var i = 0; i < words.length; i++) {
    var reversedWord = words[i].split("").reverse().join("")
    newSentence += reversedWord + " "
  }
  return newSentence
}

function onSubmit(type) {
  if (type === "encode") {
    newSentence = reverseWordsInSentence(encodeInput.value)
    encodeOutput.innerText = newSentence
  } else {
    newSentence = reverseWordsInSentence(decodeInput.value)
    decodeOutput.innerText = newSentence
  }
}
encodeBtn.addEventListener("click", () => onSubmit("encode"))
decodeBtn.addEventListener("click", () => onSubmit("decode"))
