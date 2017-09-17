import React , {Component} from "react"
import One from "../images/one.jpg"
import Two from "../images/two.jpg"
import Three from "../images/three.jpg"
import "./Img.css"


class Img extends Component {
   state={

    active:false,
     posts:[
       {id:1,
         post:"购买",
         active:false,
       },
       {id:2,
         post:"购买",
         active:false,
       },
       {id:3,
         post:"购买",
         active:false,
       }

     ]
   }
   handleClick=(i)=>{
     console.log(i)
     this.active(i)
   }
   active = (id) => {
    const {posts}=this.state
    let newPosts = posts.map(t => {
      if (t.id === id) {
        return {...t, active: true,post:"已购"}
      }
      return t
    })
    this.setState({
      posts: newPosts
    })
  }

     render() {
       const postList=this.state.posts.map((t, i)=>(
         <span onClick={()=>this.handleClick(t.id)}
           className={`post ${t.active&&"active"}`} key={t.id}>{t.post}</span>
       ))
     return(
       <div className="img">
         <div>
           <img src={One} alt=""/>
           <img src={Two} alt=""/>
           <img src={Three} alt=""/>
         </div>
         <div>
           {postList}
         </div>

       </div>
     )
  }
}


export default Img
