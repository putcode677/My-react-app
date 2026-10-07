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
  return (
    <div>
      <Header />

      <StudentProfile
        name="john Hamis"
        age={22}
        course="computer science"
      />
    </div>
  )
}

export default App