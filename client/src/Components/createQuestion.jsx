import React, { Component, Fragment } from 'react'

export default class QuestionType extends Component {
  constructor(props) {
    super(props)
    let type = this.props.type  
  
    this.state = {
       type:""
    }
  }
  
  render() {
    if (type == true){
        let media =                 
    <div class="form-group">
        <label for="exampleFormControlFile1">Upload your video</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1" aria-describedby="videoHelp">
        <small id="videoHelp" class="form-text text-muted">The video must not exceed 30 seconds</small>
    </div>
    }

    else {

    }
    return (

      <Fragment>
        {this.media}
      </Fragment>
    )
  }
}

export default class createQuestion extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       type:undefined
    }
  }
  
  render() {
    return (
      <div className="form-row form_question">
        <div className="form-group col-md-4">
          <label htmlFor="inputState">Select a media type for the question</label>
          <select id="inputState" className="form-control" value={this.state.type}>
            <option selected>Text question</option>
            <option>Video</option>
          </select>
        </div>
        {
         this.state.type!== undefined ? <QuestionType type={this.state.type}/> : ""
        } 

      </div>

    )
  }
}
