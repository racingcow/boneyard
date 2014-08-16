if (Games.find().count() === 0) {

  console.log('Fixture is populating games');

  Games.insert({
    name: 'My first game',
    status: 'finished',
    winner: 'Reed',
    handCount: 4
  });

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