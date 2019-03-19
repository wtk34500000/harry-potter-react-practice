import React from 'react';
import Card from './CharacterCard';

const StudentContainer = (props) => {
  const arrOfStudents = props.allStudents.map(student => <Card handleToggle={props.handleToggle} key={student._id} studentObj={student}/>)
  return (
    <div id="character-list">
      {arrOfStudents}
    </div>
  )
}

export default StudentContainer;
