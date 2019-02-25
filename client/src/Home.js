import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {quizzes, users} from './examples';
import QuizzThumbnail from './QuizzThumbnail ';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';


class Home extends Component {

  render() {
    return (
      <div>
        <h1>test</h1>

        {quizzes.map(q => <QuizzThumbnail  key={q._uid} quizz={q} />)}
        <Link  to={'/about'}>About page</Link>  
      </div>
    )
  }
}

export default Home;