import React, { Component } from 'react'

export default class createAnswer extends Component {
  constructor(props) {
    super(props)

    const answerId=this.props.id
  
    this.state = {

    }
  }
  
  render() {
    return (
        <div className="form-row form_answer">
          <div className="form-group col-md-8">
                <label for={"inputAnswer"+this.answerId}>Type your Answer</label>
                <input type="answer" className="form-control" id={"inputAnswer"+this.answerId} ariaDescribedby="answerHelp" placeholder="Enter answer here"></input>
                <small id={"answerHelp"+this.answerId} className="form-text text-muted">Answer have to be small and simple.</small>
            </div>
        </div>
    )
  }
}
