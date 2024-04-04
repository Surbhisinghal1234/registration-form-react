import { Dashboard } from "@mui/icons-material";
import React from "react";
import NotFound from "./NotFound";
import Profile from "./profile/Profile";
import RegisterForm from "./RegisterForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const Router = () => {
  const router = createBrowserRouter([
    
    {
      path: "/",
    //   element: 
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <RegisterForm/>,
          index: true,
        },
        {
          path: "/profile",
          element: <Profile />,
        }
        
      ],
    },

  ]);

  return <div>
    <RouterProvider router={router}/>
  </div>;
};

export default Router;

