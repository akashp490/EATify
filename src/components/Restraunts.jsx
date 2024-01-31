/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../utils/constants";
import Shimmer from "./Shimmer";



   const Restaurants = () => {

      // const [resInfo, setResInfo] = useState([]);
      
      
      const [resInfo, setResInfo] = useState([]);



      const fetchRes = async() => {         
      try {
         const response = await fetch('/api');
         const json = await response.json();
         
         setResInfo(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      } catch (error) {
         console.error('Error fetching restaurant data');
      }
   }    

   useEffect(() => {
      fetchRes()
   },[])   

   
   
   const { resId } = useParams();
      
   const res = resInfo.find(e => e?.info?.id === resId);    

   console.log(res?.info);    

   // const {name,
   //        cloudinaryImageId,
   //        aggregatedDiscountInfoV3,
   //        cuisines
   //       }  = res?.info;



   // return  <Shimmer  />
 
   if(resInfo.length === 0) {            
      return  <Shimmer  />  
   }

   return(
      <div className="m-4 items-center">
         <h1 className="text-2xl font-bold">{res?.info?.name}</h1>
         <img className="my-2 rounded-3xl object-cover h-[350px] w-[350px]" src={ IMG_URL + res?.info?.cloudinaryImageId } />
         <h2 className="text-lg font-semibold mt-2 ">Discounts:</h2>
         <h4 className="font-medium">{res?.info?.aggregatedDiscountInfoV3?.header} ON ORDERS {res?.info?.aggregatedDiscountInfoV3?.subHeader}</h4>
         <h2 className="text-lg font-semibold mt-2 ">Cuisines:</h2>
         <ul className="list-style list-disc items-center">
            {res?.info?.cuisines.map(items => <li className="mx-7" key={items}>{items}</li>)}                    
         </ul>

         <h4 className="font-semibold my-1">Pricing - {res?.info?.costForTwo}</h4>
         <h4 className="font-semibold my-1">Rating - ⭐{res?.info?.avgRating} Stars</h4>
         <h4 className="my-1"><span className="font-semibold">Location</span> - {res?.info?.locality}</h4>
         <h4 className="my-1"><span className="font-semibold">Delivery Time</span> - {res?.info?.sla?.slaString}</h4>      
      

      </div>
   );

}

export default Restaurants