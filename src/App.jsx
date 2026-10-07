

function Header() {
  return <h1>Student Profile</h1>
}

function App() {
  return (
    <div>
      <Header />
      <StudentProfile />
    </div>
  )
}



function StudentProfile() {
  return (
    <div>
      <p>Name: John hamis</p>
      <p>Age: 25</p>
      <p>Course: Software Engineering</p>
    </div>
  )
}

export default App