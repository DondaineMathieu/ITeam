import React, {Component} from 'react';
import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Quizz from "./Quizz.js";
import newQuizz from "./newQuizz.js";


class App extends Component {

    render() {
		return (
			<BrowserRouter>
			<div>Ma navigation
			<Switch>
				<Route exact={true} path="/" component={Home} />
				<Route exact={true} path="/quizz/:id" component={Quizz}/>
				<Route exact={true} path="/about" component={About} />
				<Route exact={true} path="/newQuizz" component={newQuizz} />
				<Route path="*" component={() => <p>Page Not Found</p>} />
			</Switch>
			</div>
		</BrowserRouter>
		);
    }
}

export default App;
