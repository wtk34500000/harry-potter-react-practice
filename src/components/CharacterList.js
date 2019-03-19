import React from 'react';
import Card from './Card';

const StudentContainer = (props) => {
  const arrOfStudents = props.allStudents.map(student => <Card onClick={props.onClick} handleSubmit={props.handleSubmit} handleToggle={props.handleToggle} key={student._id} studentObj={student}/>)
  return (
    <div id="character-list">
      {arrOfStudents}
    </div>
  )
}

export default StudentContainer;
