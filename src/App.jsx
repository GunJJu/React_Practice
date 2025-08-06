import './App.css'
import Counter from './components/Counter'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'

const user = { name: "김짱구", age: 2 }

function App() {
  return (
    <div>
      <Counter />
      <Exam1 name={user.name} age={user.age} />
      <Exam2 />
      <Exam3 />
    </div>
  )
}

export default App
