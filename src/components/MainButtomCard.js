import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import "../App.css";
import {Link} from 'react-router-dom'

class MainButtomCard extends Component{

    render(){
        return (
            <Link to={this.props.menuText.link}>
                <Button className="btnPrincipal" content={this.props.menuText.menu} primary />
            </Link>
        )
    }
    
}

export default MainButtomCard;