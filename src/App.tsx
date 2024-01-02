// import './App.css';
import { NavbarHome } from './Components/Home/TSX/NavbarHome';
import './Components/Home/CSS/navbar.css'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  return (
    <div className='app'>
      <div className='Custome-App'>
        <NavbarHome></NavbarHome>
        <div className='icon-up' onClick={()=>{
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }}>
          <span>  <FontAwesomeIcon icon={faAngleUp} /></span>   
        </div>
      </div>
    </div>
  );
}

export default App;
