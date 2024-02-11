import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DetailsUser from "../Pages/DetailsUser/DetailsUser";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/detailsUsers/:id',
                loader: ({params}) => {
                    return fetch(`https://dummyjson.com/users/${params.id}`)
                },
                element: <DetailsUser></DetailsUser>
            }
        ]
    }
    
])