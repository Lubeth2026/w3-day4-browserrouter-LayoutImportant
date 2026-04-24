
import { Route, Routes } from 'react-router';
import './App.css'
import NavBar from './NavBar'
import Footer from './Footer'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import ProfileLayout from './components/profile/ProfileLayout';
import ProfileDetails from './components/profile/ProfileDetails';
import ProfileSettings from './components/profile/ProfileSettings';


function App() {
  

  return (
    <>
      <NavBar />
      {/*Library component//React Router Declarative Method Layout*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Dashboard />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="profile" element={<ProfileLayout/>}>
          <Route index element={<ProfileDetails/>} />
          <Route path="settings" element={<ProfileSettings/>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
