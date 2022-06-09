var EventsView = Backbone.View.extend({
    el: '#content',
    template: _.template($('#event-template').html()),
    events: {
        'click #btnClick': 'OnClick' // <event_name selector>: <callback_fn>
        //'click button#btnClick': 'OnClick' // <event_name selector>: <callback_fn>
    },
    OnClick: function() {
        alert(this.$el.html());
    },
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template());
        console.log('This video is about Delegate Events');
    }
})

var eventsViewObj = new EventsView();