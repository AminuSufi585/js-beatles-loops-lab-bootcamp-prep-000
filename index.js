function theBeatlesPlay(musicians, instruments) {
   let players = [];
   for (let i = 0; i < musicians.length; i++) {
      players.push(`${musicians[i]} plays ${instruments[i]}`);
   }
   return players;
}
