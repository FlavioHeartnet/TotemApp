import React, { Component } from 'react';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react'
import MainButtom from './MainButtomCard';



class MainMenuButtons extends Component{


    render (){
        return (
            <div> 
                <Grid columns={3} stackable>
                    <GridRow>
                        {this.props.listMenu.map((Menu) =>
                            <GridColumn>
                                <MainButtom menuText={Menu}/>
                            </GridColumn>
                        )}
                    </GridRow> 
                </Grid> 
            </div>
            
        )
    }
        
}

export default MainMenuButtons;