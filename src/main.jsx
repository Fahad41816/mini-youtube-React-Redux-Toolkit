import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import "./index.css";
import Layout from './pages/Layout/Layout.JSx'
import WatchVideo from './pages/watchVideo/watchVideo.jsx'
import Home from './pages/Home/Home.jsx'
 


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/video/:videoId",
        element: <WatchVideo/>,
        loader:({params}) => { return params.videoId} 
      }
    ] 
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
