/* eslint-disable react/prop-types */
import downArrow from '../media/down-arrow.png'
import ItemList from './ItemList';


const RestaurantCategory = ({ data, showItems, setShowIndex, setShowItemToggle }) => {
   

   const handleClick = () => {
      setShowIndex();           
      setShowItemToggle();
   };
 
  return (
     
    <div className="items-center  m-6 p-3 rounded-xl bg-slate-50 shadow-xl cursor-pointer ">
      <div className='flex justify-between mb-1' onClick={handleClick}> 
      <p className='font-semibold'>{data?.title} ({data?.itemCards.length})</p>
      <img src={downArrow} className='w-[20px] h-[20px]' />      
      </div>

      {showItems && <ItemList items={data?.itemCards} /> }
      
       
   </div> 
  )
}

export default RestaurantCategory