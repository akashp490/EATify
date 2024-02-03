/* eslint-disable react/display-name */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { IMG_URL } from "../utils/constants";



const ResCards = (props) => {
   const {resData} = props;

   const { cloudinaryImageId,
            name,      
            costForTwo,
            avgRating,
            sla,
         } = resData?.info ;

return (    
   <div className='w-[200px] h-full bg-orange-100 p-4 rounded-xl hover:bg-orange-200 active:bg-orange-400'>      
      <img 
      className='p-1 mb-2 rounded-xl object-cover h-32 w-full '
      src={ IMG_URL + cloudinaryImageId } />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4 className="font-semibold my-1">{costForTwo}</h4>
      <h4 className="font-semibold my-1">⭐{avgRating} Stars</h4>
      <h4><span className="font-semibold">Delivery Time</span> - {sla?.slaString}</h4>      
   </div>
)};

export const LabelledResCard = (ResCards) => {  
   return (props) => {
      return(
            <div className="h-full">
               <label className="absolute p-1 bg-orange-400 rounded-md">Suggested</label>
               <ResCards {...props} />
            </div>
      );        
   };
};

export default ResCards