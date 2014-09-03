if (Games.find().count() === 0) {

  console.log('Fixture is populating games');

  var gameId = Games.insert({
    name: 'My first game',
    status: 'finished',
    winner: 'Reed',
    handCount: 4
  });

  for (var i = 1; i < 5; i++) {
    Rounds.insert({
      name: 'round ' + i,
      gameId: gameId,
      rolls: [{
        playerName: 'Inkie',
        rollValue: 1
      },{
        playerName: 'Pinkie',
        rollValue: 2
      },{
        playerName: 'Blinkie',
        rollValue: 3
      },{
        playerName: 'Sue',
        rollValue: 4
      }]
    });
  }

  Games.insert({
    name: 'Double or nothin\'',
    status: 'finished',
    winner: 'House',
    handCount: 3
  });

  Games.insert({
    name: 'Revenge!',
    status: 'finished',
    winner: 'Therrin',
    handCount: 5
  });

}
else {
  console.log('Fixture says that games already exist');
}