import React, {
  //Component,
  useState
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
  const [user, setUser] = useState({});

  const buscar = async () => {

    const json = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const user = await json.json().catch(err => console.log)

    setUser(user)
  }


  return (
    <div className="App">
      <h5>{!user.title ? 'HOLA MUNDO' : user.title}</h5>
      <button class="btn" onClick={() => buscar()}>
        Aumentar
    </button>
    </div>
  );

}


export default App;
