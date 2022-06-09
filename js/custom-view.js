var FirstModel = Backbone.Model.extend({
    defaults: {
        rollno: 0,
        name: '',
        contact: ''
    }
});
var firstModelObj = new FirstModel();

firstModelObj.set({
    rollno: 1,
    name: 'Leandro',
    contact: '1234567890'
});

var FirstView = Backbone.View.extend({
    model: firstModelObj,
    tagName: 'p',
    initialize: function() {
        this.render();
    },
    render: function() {
        console.log(this.el);
        console.log(this.$el);

        this.$el.html('Hello World!!!');

        return this;

        /*
         * this.el - DOM Element Ex.: <div></div> 
         * this.$el - jquery Object which basically refers to the DOM element
         * this.$el.html('Hello World!!!'); equivale a:
         *  a. $('#content').html('Hello World!!!');
         *  b. $(this.el).html('');
        */ 
    }
})

var firstViewObj = new FirstView();

$('#content').html(firstViewObj.$el);