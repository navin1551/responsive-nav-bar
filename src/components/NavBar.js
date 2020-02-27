import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
	render() {
		return (
			<nav>
				<input type="checkbox" id="check" />
				<label for="check" className="checkbtn">
					<i className="fas fa-bars" />
				</label>
				<label>DesignX</label>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Services</li>
					<li>Contact</li>
					<li>Feedback</li>
				</ul>
			</nav>
		);
	}
}
