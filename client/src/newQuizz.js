import React, { Component } from 'react';

class newQuizz extends Component {
    render() {
        return (
            <div>
                <h1 className="create-Quizz">create a new quizz</h1>

                <div>
                    <label>Name the Quizz</label>
                        <input type="text" />
                    <label>Name the Museum of this quizz</label>
                        <input type="text" />
                </div>

                <div>
                    <div>
                        <label htmlFor="inputState">Select a type for the question</label>
                        <select id="inputState" className="form-control">
                            <option selected>Image</option>
                            <option>Video</option>
                            <option>Text</option>
                        </select>
                    </div>
                    <div>
                        <label>Question #1</label>
                            <input type="text" />
                        <label>Answer #1</label>
                            <input type="text" />
                        <label>Answer #2</label>
                            <input type="text" />
                        <label>Answer #3</label>
                            <input type="text" />
                        <label>Answer #4</label>
                            <input type="text" />
                        <h3>correct answer</h3>
                            <input type="checkbox"></input><label>Answer #1</label>
                            <input type="checkbox"></input><label>Answer #2</label>
                            <input type="checkbox"></input><label>Answer #3</label>
                            <input type="checkbox"></input><label>Answer #4</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default newQuizz;