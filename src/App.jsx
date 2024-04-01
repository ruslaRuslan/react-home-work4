import { useState } from 'react'
import viteLogo from '/vite.svg'
import Testomonials from './components/index.jsx'




function App() {
  
  return (
    <>
    <Testomonials
    age={23}
    imgUrl="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400"
    name="Ruslan"/>

    <Testomonials
    age={27}
    imgUrl="https://img.freepik.com/free-photo/beautiful-scenery-of-a-green-valley-near-the-alp-mountains-in-austria-under-the-cloudy-sky_181624-6979.jpg"
    name="Ali"/>

<Testomonials
    age={30}
    imgUrl="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400"
    name="Sabina"/>
    </>
  )
}

export default App
