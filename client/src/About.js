import React, { Component } from 'react';
import {HTTP_SERVER_PORT_PICTURES,HTTP_SERVER_PORT} from './constants.js';


class About extends Component {
    
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
    render() {
        
        return (
            <div id="main">
                <header className="HomeHeader"><img onClick={e=> this.openNav(e)} className="favi" src="/favicon.ico" />
                    <h1 className="HomeTitle">Home</h1>
                </header>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={e=> this.closeNav(e)}>×</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
                <div className="clearfix">
                    <div className="box">
                    </div>
                    <div className="box">
                        <h2>Are you a teacher ?
              Our service allow you to create simply and fastly for your students. </h2>
                    </div>
                    <div className="box">
                        <img className="img2" src={"/guide-1az.svg"} />
                    </div>
                </div>
                <div className="clearfix">
                    <div className="box">
                    </div>
                    <div className="box">
                        <img className="img2" src={HTTP_SERVER_PORT_PICTURES + "home/student.svg"} />
                    </div>
                    <div className="box">
                        <h2>
                            Are you a student ?
                            Let's start with the game ! Enjoy quiz on the museum you're visiting now !
            </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;