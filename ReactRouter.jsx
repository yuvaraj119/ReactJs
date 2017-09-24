import React from 'react';
import { NavLink } from 'react-router-dom';

class ReactRouter extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                {this.props.children}
            </div>    
        );
    }
}

export default ReactRouter;