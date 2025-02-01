import './App.css'
import { Counter } from './components/Counter'
import { WelcomeMessage } from './components/WelcomeMessage'
import { RandomUser } from './components/RandomUser'
import { TodoList } from './components/ToDoList'

function App() {
  return (
    <>
     <WelcomeMessage message={'hello world'} title/>
     <WelcomeMessage message={'ciao ragazzi, mi raccomando un like al video'}/>  
     <WelcomeMessage/>   
     <Counter start={1} />
     <Counter start={100} />
     <RandomUser/>
     <TodoList/>
    </>
  )
}

export default App
