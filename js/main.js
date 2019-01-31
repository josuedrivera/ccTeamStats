const team = {
  _players: [
    {
      firstName: 'Steve',
      lastName: 'Young',
      age: 8
    },
    {
      firstName: 'Jerry',
      lastName: 'Rice',
      age: 8
    },
    {
      firstName: 'Joe',
      lastName: 'Montana',
      age: 7
    }
  ],
  _games: [
    {
      opponent: 'Seahawks',
      teamPoints: 49,
      opponentPoints: 12
    },
    {
      opponent: 'Raiders',
      teamPoints: 33,
      opponentPoints: 27
    },
    {
      opponent: 'Patriots',
      teamPoints: 35,
      opponentPoints: 34
    }
  ],

//getter method for _players and _games  
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  
//add player object to players array  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

//record game results  
  addGame(opp, teamPts, oppPts) {
    let game = {
      opponent: opp,
      teamPoints: teamPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};

//add players to team and log new roster
team.addPlayer('Steph', 'Curry', 8);
team.addPlayer('Lisa', 'Leslie', 8);
team.addPlayer('Bugs', 'Bunny', 7);
console.log(team.players);

//add game
team.addGame('Giants', 55, 10);
console.log(team.games);
