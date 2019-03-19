import React, { Component } from 'react'
import StudentDetail from './CharacterCard'
import EditForm from './EditForm'

class Card extends Component {

    state ={
        onClick: false
    }

    handleEdit=()=>{
        this.setState({
            onClick: !this.state.onClick
        })
    }

    handleSubmit=(newName, studentObj)=>{
        this.setState({
            onClick: !this.state.onClick
        })
        this.props.handleSubmit(newName, studentObj)
    }

    render(){
        console.log(this.state.onClick)
        const editForm=<EditForm handleSubmit={this.handleSubmit} studentObj={this.props.studentObj} />    
        const studentDetail = <StudentDetail handleToggle={this.props.handleToggle} handleEdit={this.handleEdit} studentObj={this.props.studentObj} />
        return (
            <div className="card-container">
            {this.state.onClick? editForm: studentDetail}
            </div>
        )
    }
}

export default Card;