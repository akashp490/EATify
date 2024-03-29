import {  useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";
import logo from '../media/icons8-search.svg'


const Cart = () => {
 
 const addedItems = useSelector((store) => store.cart.items);

 if(addedItems.length === 0){
   return (
      <div className="grid place-items-center" >
         <h1 className=" mt-20 font-bold text-2xl">Cart is empty. Add some items to it.</h1>
         <img src={logo} className="mt-[90px] w-[150px]"  />
      </div>
   
 )}

  return (
    <div>
      {addedItems.map((item) => (
      <div key={item?.card?.info?.id} className="flex p-4 justify-between items-center w-[60%] ml-[190px] border-t-2  ">
               <div className= "text-left">
                  <span className="font-semibold">{item?.card?.info?.name}</span>
                  <span> -  ₹ {item?.card?.info?.price ? item?.card?.info?.price /100 : item?.card?.info?.defaultPrice / 100}</span>
                  
               </div>
               
               <div className="p-1 m-2 w-3/12">                  
                  <img src={IMG_URL + item?.card?.info?.imageId} className="rounded-xl object-cover h-[150px] w-full " />
               </div>

      </div>
      ))}

    </div>
  )
}

export default Cart