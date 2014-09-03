Meteor.publish('games', function() {
  return Games.find();
});

Meteor.publish('singleGame', function(id) {
  return Games.find(id);
});

Meteor.publish('rounds', function(gameId) {
  return Rounds.find({gameId: gameId});
});