var FirstView = Backbone.View.extend({
    el: '#content',
    //template: _.template('Hello this is inline template'), // inline template
    //template: _.template($('#our-template').html()), // external template
    template: $('#our-template').html(), // external template
    initialize: function() {
        this.render();
    },
    render: function() {
        console.log('This is our revision class of backbone template');
        //this.$el.html(this.template()); // inline template
        template = _.template(this.template);
        this.$el.html(this.template);
    }
})

var firstViewObj = new FirstView();