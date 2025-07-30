
import './App.css'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import RootLayout from './components/layouts/RootLayout'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import Collection from './components/pages/Collection'
import Journal from './components/pages/Journal'
import Lookbook from './components/pages/Lookbook'
import Pages from './components/pages/Pages'

function App() {


  return (
    <>
      {/* <h1 className='underline font-bold bg-amber-500'>Hello world</h1> 
      <Header/>
      <Footer/> */}
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="journal" element={<Journal/>} />
          <Route path="collection" element={<Collection/>} />
          <Route path="lookbook" element={<Lookbook/>} />
          <Route path="pages" element={<Pages/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
