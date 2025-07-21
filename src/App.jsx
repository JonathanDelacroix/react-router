import { Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Layout from './components/Layout';
import Category from './pages/Category.jsx';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/categorie/:category" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App;
