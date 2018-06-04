console.log("Hi there, let's see what the quote of the day is.");
let randomQuote = function() {
    let quotes = [
        "I stubbed my toe",
        "King Arthur is a legend",
        "Mermaids have taken over the land",
        "Grass hopper grows a spare leg",
        "Be Yourself" 
      ];
  
      let answer = quotes[Math.floor(Math.random()*quotes.length)];
      return answer;
    };
    randomQuote();
 
    // module.exports.answer = answer;
    module.exports.randomQuote = randomQuote;