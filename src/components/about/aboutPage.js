'use strict';

var React = require('react');

var About = React.createClass({
	render: function() {
		return (
			<div>
				<h1>About Page</h1>
				<p>
					This app uses
					<ul>
						<li>list 1</li>
						
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = About;