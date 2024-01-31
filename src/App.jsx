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
import Restaurants from './components/Restraunts';

import { Suspense, lazy } from 'react';
import Shimmer from './components/Shimmer';



const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => (
   
   <div className='p-4'>
      <Header />
      <Outlet  />
   </div>
);

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
            element: <Restaurants  />
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