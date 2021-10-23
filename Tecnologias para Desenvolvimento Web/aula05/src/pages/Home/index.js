import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h3>Home</h3>
            <Link to = "/Contato"> Contato </Link><br/>
            <Link to = "/Sobre"> Sobre </Link>
        </div>
    )
}
export default Home;