"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
// Router.HistoryLocation, add this to run method and allows for clean urls no #
Router.run(routes, function(Handler){
    React.render(<Handler />, document.getElementById('app'));
});

