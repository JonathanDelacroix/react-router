import { Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import './App.css'
import Layout from './pages/components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
