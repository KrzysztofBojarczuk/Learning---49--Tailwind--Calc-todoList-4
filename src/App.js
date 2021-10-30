import './App.css';
import CalculatorApp from './components/CalculatorApp';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoApp from "./components/TodoApp"
import {store} from "./redux/store";
import {Provider} from "react-redux";


function App() {
  return (
    <div>
      <Provider store={store}>
      <TodoApp/>
      </Provider>
      <br />
      <hr />
      <br />
      <CalculatorApp/>


  
</div>
  );
}

export default App;
