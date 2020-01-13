import React, { Component } from 'react';
import { Card, CardContent } from 'semantic-ui-react'
import "../App.css";
class MainButtomCard extends Component{

    render(){
        return (
            <Card className="">
                <CardContent>
                    {this.props.menuText}
                </CardContent>
            </Card>
        )
    }
    
}

export default MainButtomCard;