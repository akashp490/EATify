import {  useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";


const Cart = () => {
 
 const addedItems = useSelector((store) => store.cart.items);

 if(addedItems.length === 0){
   return <h1 className="text-center mt-20 font-bold text-xl">Cart is empty. Add some items to it.</h1>
 }

  return (
    <div>
      {addedItems.map((item) => (
      <div key={item?.card?.info?.id}>
         <div className="w-9/12">
                  <span className="font-semibold">{item?.card?.info?.name}</span>
                  <span className=""> -  ₹ {item?.card?.info?.price ? item?.card?.info?.price /100 : item?.card?.info?.defaultPrice / 100}</span>
                  <p className="mt-3 pr-3 text-xs ">{item?.card?.info?.description}</p> 
               </div>
               
               <div className="p-1 m-2 w-3/12  ">                  
                  <img src={IMG_URL + item?.card?.info?.imageId} className="rounded-xl object-cover h-[150px] w-full " />
               </div>

      </div>
      ))}

    </div>
  )
}

export default Cart