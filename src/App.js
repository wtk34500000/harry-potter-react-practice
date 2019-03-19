import React, {Component} from 'react';
import './App.css';
import Filter from './components/Nav';
import StudentContainer from './components/CharacterList'
import TeamContainer from './components/TeamList'
import {getGryffindor} from './endpoints'
import {getStudent} from './endpoints' 


class App extends Component {
  state ={
    allStudents: [],
    teamStudents: [],
    userInput: " "
  }

  componentDidMount(){
    fetch(getGryffindor)
    .then(res => res.json())
    .then(students => {
        students[0].members.forEach(student => {
          const studentUrl = getStudent(student._id)
          fetch(studentUrl)
          .then(res => res.json())
          .then(student => this.setState({allStudents: [...this.state.allStudents, student]}))
        })
        }
      )
  }

  handleAdd = (studentObj)=>{
    
      const newStudentArr=[...this.state.allStudents].filter(student => student._id !== studentObj._id)
      const teamStudentArr=[studentObj, ...this.state.teamStudents]
      this.setState({
        allStudents: newStudentArr,
        teamStudents: teamStudentArr
      })
  }

  handleRemove = (studentObj)=>{
    const newStudentArr=[studentObj, ...this.state.allStudents]
    const teamStudentArr=[...this.state.teamStudents].filter(student => student._id !==studentObj._id)
    this.setState({
      allStudents: newStudentArr,
      teamStudents: teamStudentArr
    })
  }

  handleFilter = (e) =>{
    this.setState({
      userInput: e.target.value,
    })
  }

  filterArry = (arr)=>{
    if(this.state.userInput === " "){
      return arr
    }else{
      return [...arr].filter(student => student.name.toLowerCase().includes(this.state.userInput.toLowerCase()))
    }
  }

  render(){
    return (
      <div id="character-container">
        <Filter handleFilter={this.handleFilter} userInput={this.state.userInput}/> 
        <StudentContainer handleToggle={this.handleAdd} allStudents={this.filterArry(this.state.allStudents)}/> 
        <TeamContainer handleToggle={this.handleRemove} teamStudents={this.filterArry(this.state.teamStudents)}/> 
      </div>
    )
  }
}

export default App;
