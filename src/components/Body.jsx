
import ResCards,{LabelledResCard} from './Rescards';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import SearchBox from './search-component';
import resApi from '../utils/mockData';



const Body = () => {
   const [listOfRes, setListOfRes] = useState(resApi.map(e => e));
   const [filteredResList, setFilteredResList] = useState(resApi.map(e => e));  
   const [topButton, setTopButton] = useState(true);   
   
   const LabelCard = LabelledResCard(ResCards);

   useEffect(() => {
      fetchData();
   },[])
   
   const fetchData = async () => {
      try {
         const response = await fetch();
         const json = await response?.json();        
        
         setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

         setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

      } catch (error) {
         console.error('Error fetching data:', error);
      }
   } 
    

   console.log(filteredResList);
   

   if(listOfRes?.length === 0) {            
      return  <Shimmer  />  
   }

   
   return(
   <div className=''> 
      <div className='md:flex gap-1'>        
         <SearchBox  
            listOfRes = {listOfRes}
            setListOfRes = {setListOfRes}

            filteredResList = {filteredResList}
            setFilteredResList = {setFilteredResList}
         />

        
         <button 
               className="bg-orange-400 font-medium rounded-full m-3 p-2 hover:bg-orange-500"
               onClick={() => {

                 if(topButton) {const filtered = listOfRes?.filter((restraunt) => (
                  restraunt.info.avgRating > 4.4
                  ));

                  setFilteredResList(filtered);
                  setTopButton(false);
                  }

                  else{
                     setFilteredResList(listOfRes);
                     setTopButton(true);
                  }
               }}
            >
               Top Restraunts
         </button>

      </div>

      <div className='flex flex-wrap gap-4 w-[100%]'>                    
         {filteredResList?.map((restaurant) => (           
            <Link key={restaurant?.info?.id} to={"/restaurants/"+ restaurant?.info?.id} >

             {(restaurant?.info?.avgRating > 4.4) ? <LabelCard resData={restaurant} /> : 
             <ResCards  resData={restaurant} />      
             }   

               {/* <ResCards  resData={restaurant} /> */}


             

            </Link>
         ))   
         }          
                    
      </div>

   </div>   
)};

export default Body