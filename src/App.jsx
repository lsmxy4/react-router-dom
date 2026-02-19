import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/NotFound'
import Button from './components/Button'
import Header from './components/Header'
import { Route,Routes } from 'react-router-dom'
import { getEmotionImage } from './util/getEmotionImage'
import './App.css'

function App() {

  return (
    <div>
      <Header 
      title = 'Header123'
      leftChild={<Button text='left'/>}
      rightChild={<Button text ='right'/>}
      />
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/new' element ={<New/>}/>
      <Route path='/edit/:id' element ={<Edit/>}/>
      <Route path='/daily/:id' element ={<Diary/>}/>
      <Route path='*' element ={<NotFound/>}/>
    </Routes>
    </div>
  )
}

export default App
