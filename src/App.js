import React, {
  Component,
  //useState
} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      user: {}
    }

    this.buscar = this.buscar.bind(this);

  }

  async buscar() {

    const json = await fetch('https://jsonplaceholder.typicode.com/todos/' + (this.state.num + 1))
    const user = await json.json().catch(err => console.log)

    this.setState(state => ({
      num: state.num + 1,
      user: user
    }));
  }


  render() {
    return (
      <div className="App">

        <h5>{!this.state.user.title ? 'NO HA HECHO NINGUNA PETICION' : this.state.user.title}</h5>

        <p>Ha hecho {this.state.num} peticiones</p>

        <button class="btn" onClick={this.buscar}>Aumentar</button>

      </div>
    );

  }

}

/*
const App = () => {

  const [user, setUser] = useState({});
  const [num, setNum] = useState(0);

  const buscar = async () => {

    const json = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const user = await json.json().catch(err => console.log)

    setUser(user)
    setNum(num + 1)
  }


  return (
    <div className="App">

      <h5>{!user.title ? 'NO HA HECHO NINGUNA PETICION' : user.title}</h5>

      <p>Ha hecho {num} peticiones</p>

      <button class="btn" onClick={buscar}>
        Aumentar
    </button>

    </div>
  );

}
*/

export default App;
