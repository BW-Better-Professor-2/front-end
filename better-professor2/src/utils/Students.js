import React from 'react';

const Students = props => {
    return (
      <div className="student-list">
        {props.students.map(student => (
          <div className="student" key={student.id}>
            <h2>{student.studentName}</h2>
            <p>{student.studentEmail}</p>
          </div>
        ))}
      </div>
    );
  };

export default Students;