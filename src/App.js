import React, {Component} from 'react';
import './App.css';
import MainMenuButtons from "./components/MainMenuButtons";
import {Image, Grid, GridColumn} from 'semantic-ui-react';
import Logo from './img/logosnt.png';
import ArenaConference from './Pages/ArenaConference';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  
  state = {
    listMenu: [
        {
            key: 1,
            menu: "Calendário",
            link: "/",
        },
        {
            key: 2,
            menu: "Arena Conference",
            link: "/arenaconference",
        },
       
        {
            key: 4,
            menu: "Pesquisa de satisfação", 
            link: "/",
        },
        {
            key: 5,
            menu: "Revisão de Vidas", 
            link: "/",
        },
        {
            key: 6,
            menu: "Instituto de vencedores",
            link: "/",

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
          <div className="ui middle aligned center aligned grid text-center">
              <Switch>
                  <Route path={"/"} exact render={() => <MainMenuButtons listMenu={this.state.listMenu} />} />
                  <Route path={"/arenaconference"} exact component={ArenaConference} />
              </Switch>  
          </div>
        </div> 
      </div>
    );
  }
  
}

export default App;
