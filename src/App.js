import React, { Component } from 'react';
import Validation from './Validation/Validation.js'
import './App.css';
import Char from './Char/Char';

class App extends Component {

  state = {
    userInput: ''
  }

  textChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  removeClicked = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
    console.log(this.state.userInput);
  }



  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.removeClicked(index)}
      />;
    })

    return (
      <div className="App">
        <input type='text' onChange={this.textChangeHandler}
          value={this.state.userInput} />
        <Validation inputlength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
