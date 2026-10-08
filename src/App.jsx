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
        name="joel hamis"
        age={25}
        course="Software Engineering"
      />

      <StudentProfile
        name="kamwi ally"
        age={28}
        course="Telecommunication Engineering"
      />

      <StudentProfile
        name="ally juma"
        age={26}
        course="Software Engineering"
      />

      <StudentProfile
        name="hamis john"
        age={23}
        course="Computer Engineering"
      />
    </div>
  )
}

export default App