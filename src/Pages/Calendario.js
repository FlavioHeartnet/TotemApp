import React, { Component } from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import Back from '../components/Back';
import ReactDOM from 'react-dom';

class Calendario extends Component {


    render(){
        return(
            <div className="">
                <Back/><br/><br/>
                <FullCalendar
                    id = "cale-33"
                header = {{
                    left: 'prev,next',
                    center: 'title',
                    //right: 'month,basicWeek,basicDay'
                }}
                navLinks= {true} // can click day/week names to navigate views
                editable= {false}
                eventLimit= {true} // allow "more" link when too many events
                events = {this.props.events}
                locale = "pt"	
                />
            </div>
        )
    }


}
export default Calendario;