import React, {
  //Component,
  useEffect, useState
} from 'react';
import './App.css';
/*
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    }
    this.contar = this.contar.bind(this);
  }

  contar() {
    this.setState(state => ({
      contador: state.contador + 1
    }));
  }

  render() {

    return (
      <div className="App">


        <h5>{this.state.contador}</h5>


        <button class="btn" onClick={this.contar}>
          Aumentar
        </button>



      </div>
    );

  }

}
*/

const App = (props) => {
  const [contador, setCount] = useState(0);

  return (
    <div className="App">
      <h5>{contador}</h5>
      <button class="btn" onClick={() => setCount(contador + 1)}>
        Aumentar
    </button>
    </div>
  )

}


export default App;
