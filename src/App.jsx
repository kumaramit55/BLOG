
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut'

import About from './Components/About Me/About'
import Contact from './Components/Contact/Contact'

import Articles from './Components/Articles/Articles'
import SingleArticle from './Components/SingleAticle/SingleArticle'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayOut />}>
            <Route path='' element={<Articles/>} />
            <Route path='AboutMe' element={<About />} />
            <Route path='ContactMe' element={<Contact />} />
            <Route path='Articles/:blogId' element={<SingleArticle/>}/>

          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
