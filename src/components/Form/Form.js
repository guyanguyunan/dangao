import React , {Component} from "react"
import "./Form.css"
import Four from "../images/four.jpg"
import Five from "../images/five.jpg"
import Six from "../images/six.jpg"
import Seven from "../images/seven.jpg"

class Form extends Component {
  state={
     count:0,
     counto:0,
     countt:0,
     counts:0,
     dan:43,
     dano:95.99,
     dant:4.99,
     dans:8.45

  }
  handleClick=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  oneClick=()=>{
    this.setState({
      count:this.state.count<1 ? 0:this.state.count-1
    })
  }
  twoClick=()=>{
    this.setState({
      counto:this.state.counto+1
    })
  }
  threeClick=()=>{
    this.setState({
      counto:this.state.counto<1 ? 0:this.state.counto-1
    })
  }
  fourClick=()=>{
    this.setState({
      countt:this.state.countt+1
    })
  }
  fiveClick=()=>{
    this.setState({
      countt:this.state.countt<1 ? 0:this.state.countt-1
    })
  }
  sixClick=()=>{
    this.setState({
      counts:this.state.counts+1
    })
  }
  sevenClick=()=>{
    this.setState({
      counts:this.state.counts<1 ? 0:this.state.counts-1
    })
  }

      render() {
       const zong=this.state.count*this.state.dan+this.state.counto*this.state.dano+this.state.countt*this.state.dant+this.state.counts*this.state.dans
       console.log(zong)

      return(
        <div className="form">
          <div className="main">
               {zong}
          </div>
          <div className="formo">
        <div className="one">
          <div className="two">
            <img src={Four} alt=""/>
            <span>White Shirt</span>
            <span className="dan">$ {this.state.dan}</span>
          </div>
        <div className="three">
          <span onClick={this.handleClick}>+</span>
          <span className="count">
            {this.state.count}
          </span>
          <span onClick={this.oneClick}>-</span>
        </div>



        </div>
        <div className="one">
          <div className="two">
            <img src={Five} alt=""/>
            <span>Nike Sneskers</span>
            <span className="dano">$ {this.state.dano}</span>
          </div>
          <div className="three">
            <span onClick={this.twoClick}>+</span>
            <span className="counto">
                {this.state.counto}
            </span>
            <span onClick={this.threeClick}>-</span>
          </div>

          </div>
        <div className="one">
          <div className="two">
            <img src={Six} alt=""/>
            <span>Simple T-Shirt</span>
            <span className="dant">$ {this.state.dant}</span>
          </div>
          <div className="three">
            <span onClick={this.fourClick}>+</span>
            <span className="countt">
                {this.state.countt}
            </span>
            <span onClick={this.fiveClick}>-</span>
          </div>

        </div>
        <div className="one">
          <div className="two">
            <img src={Seven} alt=""/>
            <span>Blac Cap</span>
            <span className="dans">$ {this.state.dans}</span>
          </div>
          <div className="three">
            <span onClick={this.sixClick}>+</span>
            <span className="counts">
                {this.state.counts}
            </span>
            <span onClick={this.sevenClick}>-</span>
          </div>

          </div>
        </div>
        </div>
      )
  }
}


export default Form
