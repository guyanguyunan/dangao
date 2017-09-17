import React , {Component} from "react"
import "./App.css"
import Img from "../Img/Img"
import Form from "../Form/Form"


class App extends Component {
      render() {
      return(
        <div className="app">
          <Img />

          <Form />
        </div>
      )

  }
}


export default App
