import React, { Component } from 'react'

export default class FooterQuiz extends Component {
  render() {
    return (
        <footer>
            <div className="container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <span className="icon-arrow-left icon"></span>
                        </div>
                        <div className="col-4">
                        <span class="icon-gamepad1 icon"></span>
                        </div>
                        <div className="col-4">
                            <span className="icon-arrow-right icon"></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}
