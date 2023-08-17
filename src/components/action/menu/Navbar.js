import {useState, useEffect} from 'react'
import axios from 'axios'

const Navbar = () => {
   const[object, setObject]=useState([])
   
   useEffect(()=>{
    const fetData=async()=>{
        const data=await axios.get('http://localhost:8080/api/v1/products')
        setObject(data.data)
    } 
      fetData()   
},[])

    return ( 
        <div className="col-lg-9 ">
            <div className='grid_container'>
                {object.map(data=>{
                    return(
                        <div  key={data.id}className='grid_item'>
                            <img className='rounded border border-start-0' src={data.image} alt=''/>
                            <h3 className='fs-6'>{data.name}</h3>
                            <p className='text-secondary'>{data.price} đ</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Navbar;