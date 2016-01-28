// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %><button class="dequeue">Dequeue</button><button class="play">Play</button></td>'),

  events: {
    'click .play': function() {
      this.model.play();
    },
    'click .dequeue': function(){
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
