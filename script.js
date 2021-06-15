var quote = ["a", "b", "c", "d", "e"];
function newQuote() {
  var randomNumber = Math.floor(Math.random() * quote.length);
  document.getElementById("quoteDisplay").textContent = quote[randomNumber];
}
