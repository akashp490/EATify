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
import { Provider } from 'react-redux';
import appStore from './utils/appStore';





const Grocery = lazy(() => import('./components/Grocery'));

const Cart =  lazy(() => import('./components/Cart'));

const AppLayout = () =>{ 
   
   const [userName, setUserName] = useState();

   useEffect(() => {
      setUserName("Akash");
   },[])

   
   
   return(  
      <Provider store={appStore} >
         <UserContext.Provider value={{ loggedInUser: userName}} >    
            <div className='p-4'>
               <Header />
               <Outlet  />
            </div>
         </UserContext.Provider>
      </Provider>
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
         {
            path: "/cart",
            element: <Suspense fallback= {<Shimmer/>}><Cart  /></Suspense>
         },
      ],
      errorElement: <Error />
   },
   
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 