import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn : false
         }
     }
     
    render() {

        return(
            this.state.isLoggedIn?
            <div>welcome Konj</div> :
            <div>Welcome Guest</div>
        )

        /* let message
        if (this.state.isLoggedIn ) {
            message = <div>Welcome KONJ</div>
            
        } else {
            message = <div>Welcome Guest</div>
        } */
       // if (this.state.isLoggedIn) {
         //   return <div>Welcome Konj</div>
        //} else {
          //  return <div>Welcome Guest</div>
        //}
        {/*return (
            <div>
            <div> Welcome Konj</div>
            <div> Welcome Guest</div>
            </div>
        )*/}
        //return <div>{message}</div>
    }
}

export default UserGreeting