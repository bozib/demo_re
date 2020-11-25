import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
         
     
         this.state = {
              username : '',
              comment : '',
              topic : 'react'
         }
     }

        handleUsernameChange = event => {
         this.setState({
             username : event.target.value
         })

        }

         handleCommentChange = event => {
             this.setState ({
                 comment : event.target.value
             })
         }
        handleTopicChange = event => {
            this.setState ({
                topic:  event.target.value
            })
        }
        handleSubmit = event => {
            alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
          event.preventDefault()
          //ne brise polja nakon 
        }
        

    render() {
        const {username,comment,topic} = this.state
        // destructuring
        return (
            <form onSubmit= {this.handleSubmit}>
               <div>
                <label>Username</label>
                 <input type= 'text' 
                        value= {username}
                     onChange= {this.handleUsernameChange} />
               </div>
               <div>
                   <label>Comments</label>
                   <textarea type= 'text' 
                             value = {comment}
                             onChange = {this.handleCommentChange}>
                    </textarea>
               </div>
               <div>
                    <label>Topic</label>
                 <select value = {topic} onChange = {this.handleTopicChange}>
                  <option value="react">React</option> 
                  <option value="angular">Angular</option>   
                  <option value="vue">Vue</option>   
                  </select>  
               </div>
               <div>
                   <button type= 'submit'>Submit</button>
               </div>
           </form>
                
            
        )
    }
}

export default Form
