import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'
import { ValidateCertificate } from './components/ValidateCertificate/ValidateCertificate'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/inicio" element={<Home type="inicio" />}/>
        <Route path="/nosotros" element={<Home type="nosotros" />}/>
        <Route path="/cotiza" element={<Form type="cotiza" />}/>
        <Route path="/contacto" element={<Form />}/>
        <Route path="/validar-certificado" element={<ValidateCertificate />}/>
      </Routes>
    </>
  )
}

export default App
