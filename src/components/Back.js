import React from 'react';
import {Link} from 'react-router-dom'

function Back() {

    return(<Link to="/">
        <button className="ui green button">Voltar</button>
    </Link>)
}

export default Back;