import React, {Component} from 'react';
import './App.css';
import MainMenuButtons from "./components/MainMenuButtons";
import {Image, Grid, GridColumn} from 'semantic-ui-react';
import Logo from './img/logosnt.png';
import {Switch, Route} from 'react-router-dom';
import Dateformat from 'dateformat';
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
    ],

    events:[
      {
          id: 1,
          title: 'Arena Jovem',
          start: '2020-01-17'
      }
      
  ],	
}

  formataData = (d) =>{
    let date = new Date();
    return date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()
  }

  componentDidMount(){
      const {firebase} = this.props;
      let ref = firebase.firestore().collection('Calendario').get();
      ref.then((s)=>{
        s.forEach((d)=>{
          const data = d.data();
          const array = [...this.state.events, {
            id: data.id,
            start: Dateformat(data.START.toDate(),"yyyy-mm-dd"),
            title: data.TITLE
          }];
          console.log(array);
          this.setState({
            events:array
          });
        })
      });
     
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
                  <Route path={"/calendario"} exact render={()=><Calendario events={this.state.events}/>} />
              </Switch>  
          </div>
        </div> 
      </div>
    );
  }
  
}

export default App;
