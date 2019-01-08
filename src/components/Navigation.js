import React, {Component} from 'react';


class Navigation extends Component {
	render () {
		return (
	   <nav className="navbar navbar-gray bg-dark">
        <a href="" className="text-white bold">
        {this.props.titulo}
        </a>
        </nav>
		
		)
	}
}
export default Navigation;