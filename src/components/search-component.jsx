/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";


const SearchBox = (props) => {

   const {listOfRes, setFilteredResList} = props;

   const [searchText, setSearchtext] = useState("");

   useEffect(() => {
       const filteredResListFromSearchButton = 
                  listOfRes?.filter((res) =>
                  res?.info?.name.toLowerCase().includes(searchText.toLowerCase())) 
               setFilteredResList(filteredResListFromSearchButton)              
               
   }, [searchText])

return(
   <div> 
      <input
         type='text'
         placeholder= {`🔍Search.....`}
         className='m-4 p-1 border-2 border-gray-950 rounded-xl w-[200px]'
         value={searchText}         
         onChange={(e) => setSearchtext(e?.target?.value)}
      />
   </div>
)

}

export default SearchBox