import resMockMenu from "../utils/mockMenuData"
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";


const MockResMenu = () => {
   const [resInfo, setResInfo] = useState(resMockMenu);
   
   const [showIndex, setShowIndex] = useState(); 
   const [showItemToggle, setShowItemToggle] = useState(false);

   console.log(resInfo);

   const { name, areaName, sla, avgRatingString, totalRatingsString} = resInfo?.data?.cards[0]?.card?.card?.info ?? {} ;

   const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter( (c) => 
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   );



  return (   
  <div className="text-center w-[70%] ml-[150px] ">
    <div className="flex mt-8  p-4 text-left  justify-between  border-b-2 border-dashed border-slate-200">
      <div className=" ">
         <h1 className="font-bold text-2xl">{name}</h1>
         <h3 className="mt-1">{areaName}, {sla?.lastMileTravelString}</h3>
      </div>     
      <div className="border-2 border-dashed rounded-lg p-1">
         <h1 className="font-bold text-lg border-b-2 border-dashed">  ⭐ {avgRatingString}</h1>
         <p className="text-sm mt-1">{totalRatingsString}</p>
      </div> 
    </div>

    <div className="mt-4">
      { categories?.map((category, index) => (
      <RestaurantCategory       
      key={category?.card?.card?.title}
      data={category?.card?.card}   

      showItems={showItemToggle && index === showIndex }
      setShowIndex={() => setShowIndex(index)}
      setShowItemToggle={() => setShowItemToggle(!showItemToggle)}
      />
    ))}
    </div>
    
   </div>  
  )  
}

export default MockResMenu