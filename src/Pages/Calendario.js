import React, { Component } from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import Back from '../components/Back';
import ReactDOM from 'react-dom';

class Calendario extends Component {

    state = {
        events:[
            {
                title: 'Arena Jovem',
                start: '2020-01-18'
            },
            {
                title: 'Culto da Familia',
                start: '2020-01-12',
            },
            {
                id: 999,
                title: 'Culto de Milagres',
                start: '2020-01-16T16:00:00'
            },
            {
                id: 999,
                title: 'Culto de Milagres',
                start: '2020-01-23T16:00:00'
            },
            
        ],		
}
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
                events = {this.state.events}
                locale = "pt"	
                />
            </div>
        )
    }


}
export default Calendario;