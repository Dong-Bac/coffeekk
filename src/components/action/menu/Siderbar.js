import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Siderbar = () => {

    const [color,setColor]=useState(6)
    const[categories, setCategories]=useState([])

    useEffect(()=>{
        const fetData=async()=>{
            const data=await axios.get('http://localhost:8080/api/v1/categories')
            setCategories(data.data)
        } 
          fetData()   
    },[])
    
    const HandleColor=(id)=>{
        setColor(id)
    }

    return ( 
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 stikySidebar h-[200px]">
            {/* <ul className="hidden-sm hidden-xs ">
                <aside className="siderbar_menu">
                    {categories.map(category=>{
                        return(
                            <li 
                                key={category.id}     
                                onClick={()=>HandleColor(category.id)} 
                                className="pb-[8px]"
                            >
                                
                                <Link to={category.name} className={`text-decoration-none ${color===category.id?'active':''} `}>{category.name}</Link>
                            </li>
                        )
                    }) }
                </aside>
            </ul> */}
            <aside id="sidebar" className="sidebar">

                <ul class="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <Link className="nav-link "to="">
                        <span>Tất cả</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="coffee">
                        <span>Cà Phê</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="couldFee">
                        
                        <span>CouldFee</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="index.html">
                        <span>CouldTea</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="tea">
                        <span>Trà</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="da_xay">
                        <span>Thức uống đa xay</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div> 
     );
}
 
export default Siderbar;