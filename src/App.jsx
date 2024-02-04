/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */


import  ReactDOM  from 'react-dom/client';
import '..//index.css';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { Suspense, lazy, useState } from 'react';
import Shimmer from './components/Shimmer';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { useEffect } from 'react';





const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () =>{ 
   
   const [userName, setUserName] = useState();

   useEffect(() => {
      setUserName("Akash");
   },[])

   
   
   return(  
   <UserContext.Provider value={{ loggedInUser: userName}} >    
      <div className='p-4'>
         <Header />
         <Outlet  />
      </div>
   </UserContext.Provider>
)};

const appRouter = createBrowserRouter([
   {
      path:"/",
      element: <AppLayout  />,
      children:[
         {
            path: "/",
            element: <Body  />
         },
         {
            path:"/about",
            element: <About />
         },
         {
            path: "/contact",
            element: <Contact />
         },
         {
            path: "/restaurants/:resId",
            element: <RestaurantMenu  />
         },
         {
            path: "/grocery",
            element: <Suspense fallback= {<Shimmer/>}> <Grocery  /> </Suspense>
         },
      ],
      errorElement: <Error />
   },
   
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 