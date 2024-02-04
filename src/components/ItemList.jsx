/* eslint-disable react/prop-types */

import { IMG_URL } from "../utils/constants";


const ItemList = ({ items }) => {    

   
  return (
    <div className="">
      
      {items.map((item) => (
         <div key={item?.card?.info?.id} className="my-2 p-2 flex items-center border-t-2 text-left cursor-default" >
               <div className="w-9/12">
                  <span className="font-semibold">{item?.card?.info?.name}</span>
                  <span className=""> -  ₹ {item?.card?.info?.price ? item?.card?.info?.price /100 : item?.card?.info?.defaultPrice / 100}</span>
                  <p className="mt-3 pr-3 text-xs ">{item?.card?.info?.description}</p> 
               </div>
               
               <div className="p-1 m-2 w-3/12  ">
                  <button 
                     className="absolute bg-orange-400 p-2 text-md rounded-lg font-semibold ml-[67px] mt-[130px]">
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