import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import JobDetails from "../Pages/Home/JobDetails";
import PrivateRouter from "../Pages/PrivateRouter";
import ApplyForm from "../Pages/Home/ApplyForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>page is not find</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRouter>
            <JobDetails></JobDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) => fetch(`http://localhost:9000/job/${params.id}`),
      },
      {
        path: "/applyform/:id",
        element: (
          <PrivateRouter>
            <ApplyForm></ApplyForm>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
export default router;
