import Navbar from './Navbar';
import './styless.scss'
import logo from '../../assets/logoCoffee.jpg'
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <header className='mt-1'>
            <div className='logo mr-5 '>
                <Link to="/">
                <img src={logo} className='h-[50px] object-fit-contain rounded' alt='logo' />
                </Link>
            </div>
            <div className='navbar' >
            <Navbar/>
            </div>
        </header>
     );
}
 
export default Header;