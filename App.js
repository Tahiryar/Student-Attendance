import React, { useState } from 'react';
import './App.css';

function App() {
  // Sample students data
  const students = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Ahmed' },
    { id: 4, name: 'Zainab' }
  ];

  // State to track attendance
  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = false; // Initially mark all students as absent
      return acc;
    }, {})
  );

  const handleChange = (event, studentId) => {
    setAttendance({
      ...attendance,
      [studentId]: event.target.checked,
    });
  };

  const handleSubmit = () => {
    console.log('Attendance Submitted:', attendance);
  };

  return (
    <div className="App">
      <h1>Student Attendance</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        {students.map((student) => (
          <div key={student.id} className="student">
            <label>
              <input
                type="checkbox"
                checked={attendance[student.id]}
                onChange={(e) => handleChange(e, student.id)}
              />
              {student.name}
            </label>
          </div>
        ))}
        <button type="submit">Submit Attendance</button>
      </form>
    </div>
  );
}

export default App;
