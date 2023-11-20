import React from 'react';
import withNotes from './withNotes';

function Student(props) {
    console.log(props);
    return <div>Student</div>

}

export default withNotes(Student);