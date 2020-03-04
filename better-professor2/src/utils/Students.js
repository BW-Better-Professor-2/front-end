import React from 'react';

export const Students = props => {
    return(
        <div className = 'student-list'>
            {props.student.map(student => {
                <div className = 'student' key={student.id}>
                    <h2>{student.studentName}</h2>
                    <h2>{student.studentEmail}</h2>
                </div>
            })}
        </div>
    )
}