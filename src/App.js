import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import BubbleChart from './components/BubbleChart';


class App extends Component {

  render() {
    let data = {
      "children": [
        { "id": 1,
          "title": "oneField",
          "size": 150,
          "g": 80
        },
        { "id": 2,
          "title": "Teaser",
          "size": 30,
          "g": 50
        },
        { "id": 3,
          "title": "Crazy",
          "size": 70,
          "g": 80
        }
      ]
    }
  

  return (
    <div className='App'>
    <div className='App-header'>
    <h2>d3Es6 dashboard</h2>
    </div>
    <div>
    <BubbleChart data={data}/>
    </div>
    </div>
  )
}
}
export default App;
