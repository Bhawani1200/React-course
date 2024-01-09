import MinimalLayout from '../Components/layout/MinimalLayout'
import Login from "../views/pages/Login";
import Register from '../views/pages/Register';
import Landing from "../views/pages/Landing";
import ProductDetails from '../Components/ecommerce/ProductDetails';
import Contact from '../views/pages/Contact';


const loginRoutes={
    path: "/",
    element: <MinimalLayout />,
    children :[
        {
            path :"/login",
            element : <Login />
        },
        {
        path :"/register",
        element :<Register/>
        },
      
        {
            path:"/landing",
            element: <Landing />
    },
        {
            path:"/productdetails/:id",
            element: <ProductDetails />
    },
        {
            path:"/contact",
            element: <Contact />
    },
    ]
}
export default loginRoutes;