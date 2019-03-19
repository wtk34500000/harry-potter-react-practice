import React from 'react';
import Card from './Card';

const TeamList = (props) => {
    const arrOfStudents = props.teamStudents.map(student => <Card key={student._id} studentObj={student} handleToggle={props.handleToggle}/>)
  return (
    <div id="team-list">
      <h2>My Wizarding Team</h2>
          {arrOfStudents}
    </div>
  )
}

export default TeamList;
