
import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './NavBar'
import Footer from './Footer'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import ContactForm from './components/ContactForm';

function App() {
  

  return (
    <>
      <NavBar />
      {/*Library component//React Router*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Dashboard />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
