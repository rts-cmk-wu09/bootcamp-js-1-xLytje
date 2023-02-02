function displayQuote() {
      let quotes = [
        "quote 1",
        "quote 2",
        "quote 3",
        "quote 4"
      ];

      let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

      document.querySelector(".siteFooter__quote").innerHTML = randomQuote;
}