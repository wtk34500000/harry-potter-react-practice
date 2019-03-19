import React, { Component } from 'react'

class EditForm extends Component {
    state={
        input: ""
    }

    handleOnChange =(e)=>{
        this.setState({
            input: e.target.value
        })
        
    }

    hanlderSubmit = () =>{
        this.props.handleSubmit(this.state.input, this.props.studentObj)
    }


    render(){
        return (
        <div id="character-card">
        <p>{this.props.studentObj.name}</p>
        <input type="text" value={this.state.input} onChange={this.handleOnChange}/>
        
        <button onClick={this.hanlderSubmit} >Submit</button>
      </div>
        )
    }
}

export default EditForm