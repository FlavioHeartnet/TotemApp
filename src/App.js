import React, {Component} from 'react';
import './App.css';
import MainMenuButtons from "./components/MainMenuButtons";
import {Image, Grid, GridColumn} from 'semantic-ui-react';
import Logo from './img/logosnt.png';
import {Switch, Route} from 'react-router-dom';

import Calendario from './Pages/Calendario';
import ArenaConference from './Pages/ArenaConference';

class App extends Component {
  
  state = {
    listMenu: [
        {
            key: 1,
            menu: "Calendário",
            link: "/calendario",
            active: true
        },
        {
            key: 2,
            menu: "Arena Conference",
            link: "/arenaconference",
            active: true
        },
       
        {
            key: 4,
            menu: "Pesquisa de satisfação", 
            link: "/",
            active: false
        },
        {
            key: 5,
            menu: "Revisão de Vidas", 
            link: "/",
            active: false
        },
        {
            key: 6,
            menu: "Instituto de vencedores",
            link: "/",
            active: false

        },   
    ]
}

  render(){
    return (
      <div className="ui ui middle aligned center aligned grid container MainContainer text-center">
        <div className="column">
          <Grid columns={3}>
            <GridColumn >
              <Image src={Logo} size='medium' />
            </GridColumn>
            <GridColumn>
              <h1 className="headerTopAjudst"> Seja bem vindo</h1>
            </GridColumn>
            <GridColumn/>
          </Grid>
          <p className="subtittleTop">
            Aqui você poderá ter acesso a diversas facilidades digitais, como obter informações sobre nossos eventos e calendário da igreja,
            poder passar dizimos e ofertas e muito mais!
          </p>
          <div className="text-center">
              <Switch>
                  <Route path={"/"} exact render={() => <MainMenuButtons listMenu={this.state.listMenu} />} />
                  <Route path={"/arenaconference"} exact component={ArenaConference} />
                  <Route path={"/calendario"} exact component={Calendario} />
              </Switch>  
          </div>
        </div> 
      </div>
    );
  }
  
}

export default App;
