import './App.css'

function App() {
  return (
    <>
    <AnotherText></AnotherText> #another way
    <Text display="You got this"/>
    <Text display="Let's go"/>
    </>
  )
}

function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

function AnotherText() {
  return (
    <div>
      <p>A whole new World</p>
    </div>
  )
}

export default App
