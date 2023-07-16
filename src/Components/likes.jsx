import React, { Component } from 'react';


class Likes extends Component {
    state = {
        likes :25,
        clicked:false,
        clicks:0
      } 

      handleLike =()=>{
        this.setState({clicks:this.state.clicks+1});
            (this.state.clicked===false)?this.setState({clicked:true}):this.setState({clicked:false});
            {this.handleIncrement()}; 
            //This function reduces excessive liking and disliking
            //{this.handleBtn()}
       }
       handleIncrement(){
        (this.state.clicked===false)?this.setState({likes:this.state.likes+1}):this.setState({likes:this.state.likes-1});
       }
    render() { 
        return (
            <div className='m-4'> 
                <span className="badge rounded-pill text-bg-secondary ">{this.state.likes}</span>
                <br />
                <button onClick={this.handleLike} className=' m-3 btn btn-sm btn-primary'>like</button>
            </div>
        );
    }
}
 
export default Likes;