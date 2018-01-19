function theBeatlesPlay(musicians, instruments) {
   let players = [];
   for (let i = 0; i < musicians.length; i++) {
      players.push(`${musicians[i]} plays ${instruments[i]}`);
   }
   return players;
}

function johnLennonFacts(facts) {
   for (let i = 0; i < facts.length; i++) {
      facts[i] += "!!!";
   }
   return facts;
}
