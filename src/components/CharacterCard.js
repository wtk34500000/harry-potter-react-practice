import React from 'react';
// import {getStudent} from '../endpoints' 

class CharacterCard extends React.Component {
  render(){
    return (
      <div id="character-card">
        <p>{this.props.studentObj.name}</p>
        <p>{this.props.studentObj.role}</p>
        <p>{this.props.studentObj.patronus}</p>
        <button onClick={()=>this.props.handleToggle(this.props.studentObj)}>Toggle</button>
        <button>Edit</button>
      </div>
  )}
}

export default CharacterCard;
