$ = jQuery = require('jquery');

var React = require('react');

//Componests
var Authors = require('./components/authors/authorsPages');
var Home = require('./components/homepage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function(win) {
    "use strict";
    var App = React.createClass({
        render: function() {
            var Child;

            switch(this.props.route) {
                case 'about': Child = About; break;
                case 'authors': Child = Authors; break;
                default: Child = Home;
            }
            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }

    win.addEventListener('hashchange', render);
    render();
})(window);