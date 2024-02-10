import { Outlet } from 'react-router-dom';
import NavbarSimple from './components/Navbar.jsx';
import SimpleFooter from './components/SimpleFooter.jsx';

function App() {
  return (
    <>
      <NavbarSimple />
      <Outlet />
      <SimpleFooter />
    </>
  );
}

export default App;
