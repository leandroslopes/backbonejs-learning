var FirstModel = Backbone.Model.extend({
    initialize: function () {  
        console.log('This is our first model');
    }
});

var firstModel = new FirstModel();

// firstModel.set('name', 'Online Web tutor');
firstModel.set({
    name: 'Learning Backbone.js',
    author: 'ZeroOne',
    anchor: 'Leandro S Lopes'
})