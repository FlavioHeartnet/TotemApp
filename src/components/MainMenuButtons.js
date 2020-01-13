import React, { Component } from 'react';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react'
import MainButtom from './MainButtomCard';


class MainMenuButtons extends Component{

     state = {
        listMenu: [
            "Calendario",
            "Arena Conference",
            "Dizimos e Ofertas",
            "Pesquisa de satisfação", 
            "Revisão de Vidas", 
            "Instituto de vencedores"
        ],
        contador: 0
    }

    render (){
        return (
            <Grid columns={3} divided stackable>
            <GridRow>
                {this.state.listMenu.map((Menu) =>
                    <GridColumn>
                    <MainButtom menuText={Menu}/>
                  </GridColumn>
                )}
            </GridRow>
            
          </Grid>
        )
    }
        
}

export default MainMenuButtons;