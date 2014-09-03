Template.gamePage.helpers({
  rounds: function() {
    return Rounds.find({ gameId: this._id });
  }
});