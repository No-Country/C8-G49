import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "../components/";
import { Register, Feed } from '../pages/';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>No encontrado</h1>,
        children: [
            {
                path: "/",
                element: <Register />,
            },
            {
                path: "/feed",
                element: <Feed />,
            },

        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />
};

export default Router;