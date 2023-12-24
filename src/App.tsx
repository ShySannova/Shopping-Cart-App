import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Hompage/Homepage";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import ProtectRoute from "./components/ProtectRoute/ProtextRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "product/:id",
                element: <Product />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "checkout",
                element: (
                    <ProtectRoute>
                        <Checkout />
                    </ProtectRoute>
                ),
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
