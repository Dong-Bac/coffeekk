import Siderbar from "./Siderbar";
import Navbar from "./Navbar";
import './styles.scss'
const Menu = () => {
    return ( 
        <div className="container pt-[75px]">
            <div className="row">
                <Siderbar/>
                <Navbar/>
            </div>
        </div> 
    );
}
 
export default Menu;