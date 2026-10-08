function Header() {
  return <h1>Student Profile</h1>
}

function StudentProfile(props) {
  return (
    <div>
      <h2>Student Information</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </div>
  )
}

function App() {
  const students = [
    {
      id: 1,
      name: "Joel Hamis",
      age: 25,
      course: "Software Engineering"
    },
    {
      id: 2,
      name: "Kamwi Ally",
      age: 28,
      course: "Telecommunication Engineering"
    },
    {
      id: 3,
      name: "Ally Juma",
      age: 26,
      course: "Software Engineering"
    },
    {
      id: 4,
      name: "Hamis John",
      age: 23,
      course: "Computer Engineering"
    }
  ]

  return (
    <div>
      <Header />

      {students.map((student) => (
        <StudentProfile
          key={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
        />
      ))}
    </div>
  )
}

export default App