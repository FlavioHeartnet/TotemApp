import React,{Component} from 'react';
import Iframe from 'react-iframe';
import Back from '../components/Back'

class ArenaConference extends Component{
    render(){
        return(
            <div className="ArenaconferenceAjudst" >
                <Back/>
                <br/><br/>
                <Iframe
                    url="https://arenajovemweb.firebaseapp.com/"
                    width="100%"
                    height="100%"
                    id="webpage"
                    display="initial"
                    position="relative"
                />
            </div>
          
        )
    }

}
export default ArenaConference;