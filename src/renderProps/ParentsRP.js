import React from 'react';
import StudentRP from './StudentRP';
import SomeComponents from './counterEx/SomeComponents';

export default function ParentRP() {
  return (
    <div>
      ParentRP
      <StudentRP name={isLoggedIn => (isLoggedIn ? 'Dinesh' : 'Please log in')} />
      <SomeComponents />
    </div>
  );
}