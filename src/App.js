import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {userInput: '', listOfInputs: []}

  addInput = () => {
    const {userInput} = this.state
    const itemDet = {
      userInput,
      lengthOfUserInput: userInput.length,
      id: uuidv4(),
    }
    this.setState(prevState => ({
      listOfInputs: [...prevState.listOfInputs, itemDet],
      userInput: '',
    }))
  }

  onChangeUser = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput, listOfInputs} = this.state
    return (
      <div className="bg-cont">
        <div className="left-cont">
          <div className="top">
            <h1 className="left-head">Count the characters like a Boss...</h1>
          </div>
          <div className="bot">
            {listOfInputs.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no"
              />
            ) : (
              <ul className="list-cont">
                {listOfInputs.map(each => (
                  <li className="item" key={each.id}>
                    <p className="desc">
                      {each.userInput}:{each.lengthOfUserInput}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="right-cont">
          <h1 className="right-head">Character Counter</h1>
          <div className="cont">
            <form>
              <input
                type="text"
                value={userInput}
                onChange={this.onChangeUser}
                className="box"
                placeholder="Enter the Characters here"
              />
            </form>
            <button type="button" className="add-btn" onClick={this.addInput}>
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
