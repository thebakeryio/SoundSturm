/*
    Require setup + entry point for the application
*/

require.config({
    baseUrl : "scripts/",
    shim: {
        'underscore' : {exports: '_' },
        'backbone' : {exports: 'Backbone', deps: ['underscore']},
        'backbone.wreqr' : { deps : ['backbone']},
        'backbone.babysitter' : { deps : ['backbone']},
        'json' : {exports: 'JSON'},
        'handlebars' :  {exports: 'Handlebars'}
    },

    paths: {
        jquery: 'vendor/jquery.min',
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone',
        marionette : 'vendor/backbone.marionette',
        'backbone.wreqr' : 'vendor/backbone.wreqr',
        'backbone.babysitter' : 'vendor/backbone.babysitter',
        'backbone.localstorage' : 'vendor/backbone.localstorage',
        text : 'vendor/text',
        json : 'vendor/json2',
        handlebars : 'vendor/handlebars',
        templates: '../templates'
    }

});

require(['jquery','app'], function($,Application) {
    if($("#mocha").length === 0){
        Application.start();
    }
});
