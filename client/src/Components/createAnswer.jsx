import React, { Component, Fragment } from 'react'

export default class Answer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       type:""
    }
  }
  
  render() {
    if (this.state.type=="image"){
      let theAnswer = <div className="form-group">
        <label for="exampleFormControlFile1">Upload your photo</label>
        <input type="file" className="form-control-file" id="exampleFormControlFile1">
        </div>
    }
    else {

    }
    return (
      <Fragment>
        {theAnswer}
      </Fragment>
    )
  }
}

export default class CreateAnswer extends Component {
  constructor(props) {
    super(props)

    let answerId=this.props.id
  
    this.state = {

    }
  }
  
  render() {
    return (
      <div>

      </div>
    )
  }
}
