// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', lettersCount: 0}

  ChangeFunction = event => {
    const count = event.target.value.length
    this.setState({searchInput: event.target.value, lettersCount: count})
  }

  render() {
    const {searchInput, lettersCount} = this.state
    return (
      <div className="bg-container">
        <div className="calculator-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
          <div className="content-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label for="phrase" className="phrase">
                Enter the phrase
              </label>
              <input
                type="text"
                id="phrase"
                placeholder="Enter the phrase"
                className="input-element"
                value={searchInput}
                onChange={this.ChangeFunction}
              />
            </div>
            <div className="result-container">
              <p className="result">No.of letters: {lettersCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
