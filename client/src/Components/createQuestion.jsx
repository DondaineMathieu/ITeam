import React, { Component, Fragment } from 'react'

export default class QuestionType extends Component {
  constructor(props) {
    super(props)
    let type = this.props.type

    if (type == question){
      let media =  
      <div className="form-group col-md-8">
        <label htmlFor="InputEmail1">Type your question</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="questionHelp" placeholder="Enter question here" />
        <small id="questionHelp" className="form-text text-muted">Question have to be small and simple.</small>
      </div>
    }
    else if (type == video){
      let media =
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Upload your video</label>
        <input type="file" className="form-control-file" id="exampleFormControlFile1" aria-describedby="videoHelp" />
        <small id="videoHelp" className="form-text text-muted">The video must not exceed 30 seconds</small>
      </div>
    }
    else {
    let media =
    <div className="form-group">
      <label htmlFor="exampleFormControlFile1">Upload your photo</label>
      <input type="file" className="form-control-file" id="exampleFormControlFile1" />
    </div>

    }
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <Fragment>
        {this.media}
      </Fragment>
    )
  }
}

export default class createQuestion extends Component {
  render() {
    return (
      <div>
      <div className="form-row form_question">
        <div className="form-group col-md-4">
          <label htmlFor="inputState">Select a media type for the question</label>
          <select id="inputState" className="form-control">
            <option selected>Image</option>
            <option>Video</option>
            <option>Question</option>
          </select>
        </div>
        
        <QuestionType/>

      </div>
    </div>
    )
  }
}
