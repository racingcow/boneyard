Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('games'); }
});

Router.map(function() {
  this.route('gamesList', { 
    path: '/',
    yieldTemplates: {
      'gamesListToolbar': { to: 'toolbar' }
    }
  });
  this.route('gamePage', {
    path: '/games/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singleGame', this.params._id),
        Meteor.subscribe('rounds', this.params._id)
      ];
    },
    data: function() { return Games.findOne(this.params._id); },
    yieldTemplates: {
      'roundsListToolbar': { to: 'toolbar' }
    }
  });
});

Router.onBeforeAction('loading');