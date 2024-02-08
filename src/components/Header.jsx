import { useContext, useState } from 'react'
import logo from '../media/french-fries.png'
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


const Header = () =>{ 
   const [logToggle, setLogToggle] = useState("Login");

   const {loggedInUser} = useContext(UserContext);

   //Subscribing to our store
   const cartItems = useSelector((store) => {console.log(store.cart.items); return store.cart.items});
   
   
   return (
   <div className= 'flex p-4 justify-between border-b-2 border-b-slate-400 sm:flex gap-6'>
      
      <div className= 'items-center' >
         <Link to="/" className='flex gap-3 align-middle font-extrabold'> <img 
         className='line-height-10'
         src={logo}/> 
         <h2 className='line-height-10'>J.A.F.A [Just Another Food App]</h2></Link>
      </div>
      <div className= "" > 
         <ul className='md:flex gap-4 items-center font-semibold ' >
            <li className='list-item line-height-10  hover:text-orange-500'><Link to="/">Home</Link></li>
            <li className='list-item line-height-10  hover:text-orange-500'><Link to="/about">About</Link></li>
            <li className='list-item line-height-10  hover:text-orange-500'><Link to="/contact">Contact</Link></li>         
            <li className='list-item line-height-10  hover:text-orange-500'><Link to="/grocery">Grocery</Link></li>         
            <li className='list-item line-height-10  hover:text-orange-500'><Link to="/cart">Cart({cartItems.length})</Link></li>
            <li className='list-item line-height-10'>
               <button 
                  className="bg-orange-400 px-3 py-1 rounded-full font-medium hover:bg-orange-500 active:bg-orange-900"
                  onClick={() => {
                     logToggle === 'Login' ? setLogToggle('Logout') : setLogToggle('Login')
                  }}
               >
                  {logToggle}
               </button>
            </li>
            <li className='list-item line-height-10  hover:text-orange-500'>{ loggedInUser  }</li>
         </ul>
      </div>
   </div>
);
}

export default Header