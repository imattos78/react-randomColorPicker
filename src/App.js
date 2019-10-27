import React from 'react';
import {Button} from './Button';
import './style.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color: [22, 220, 100]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // Lifecycle methods

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) { 
    this.applyColor();
  }
// Tranform numbers to rbg numbers
  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }
// Change the color of the text
  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }
// Apply the background color 
  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }
// Create an array of 3 numbers from 0 to 256
  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  // Click event function
  handleClick(){
    this.setState({
      color: this.chooseColor()
    });
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is {this.formatColor(this.state.color)}
        </h1>
        <Button light={this.isLight()} onClick={this.handleClick}/>
      </div>
    );
  }
}



export default App;