function displayQuote() {
      let quotes = [
        '"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa',             //1
        '"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt',                      //2
        '"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead',                        //3
        `"Don't judge each day by the harvest you reap but by the seeds that you plant." -Robert Louis Stevenson`,          //4
        '"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt',                      //5
        '"Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin',                      //6
        '"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart." -Helen Keller',
        '"It is during our darkest moments that we must focus to see the light." -Aristotle',                               //8
        '"Whoever is happy will make others happy too." -Anne Frank',                                                       //9
        '"Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson'    //10
      ];

      let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

      document.getElementById("quote").innerHTML = randomQuote;
}