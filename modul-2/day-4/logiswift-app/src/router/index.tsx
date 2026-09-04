import Contacts from "../pages/contacts"
import Home from "../pages/home"
import Products from "../pages/products"
import TailwindIntro from "../App"
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />,
        children: [
            { path: "/tailwind-intro", element: <TailwindIntro /> },
            { path: "/products", element: <Products />},
            { path: "/contacts", element: <Contacts />},
            
        ]
        
    }
])