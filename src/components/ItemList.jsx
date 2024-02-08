/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ items }) => {    

   const dispatch = useDispatch();

   const handleClick = (item) => {
      dispatch(addItem(item));
      console.log(item);
   }
   
   
  return (
    <div>
      
      {items.map((item) => (
         <div key={item?.card?.info?.id} className="my-2 p-2 flex items-center border-t-2 text-left cursor-default" >
               <div className="w-9/12">
                  <span className="font-semibold">{item?.card?.info?.name}</span>
                  <span> -  ₹ {item?.card?.info?.price ? item?.card?.info?.price /100 : item?.card?.info?.defaultPrice / 100}</span>
                  <p className="mt-3 pr-3 text-xs ">{item?.card?.info?.description}</p> 
               </div>
               
               <div className="p-1 m-2 w-3/12  ">
                  <button 

                     onClick={() => handleClick(item)}
                     className="absolute bg-orange-400 p-2 text-md rounded-lg font-semibold ml-[67px] mt-[130px] hover:bg-orange-500 active:bg-orange-600">
                        Add +
                  </button>
                  <img src={IMG_URL + item?.card?.info?.imageId} className="rounded-xl object-cover h-[150px] w-full " />
                  
               </div>  
         </div>
      ))
      }

    </div>
  )
}

export default ItemList