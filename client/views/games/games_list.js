Template.gamesList.helpers({
  games: function() {
    console.log('hello');
    return Games.find();
  }
});