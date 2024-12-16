import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import JobDetails from "../Pages/Home/JobDetails";
import PrivateRouter from "../Pages/PrivateRouter";
import ApplyForm from "../Pages/Home/ApplyForm";
import MyApplications from "../Pages/Home/MyApplications";
import AddJobsForm from "../Pages/AddJobsForm";
import MyPostedJobs from "../Pages/MyPostedJobs";
import ViewApplication from "../Pages/Home/ViewApplication";
import Loader from "../Pages/Loader";
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
        path: "/myjobs",
        element: (
          <PrivateRouter>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "addjob",
        element: (
          <PrivateRouter>
            <AddJobsForm></AddJobsForm>
          </PrivateRouter>
        ),
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
        path: "/applyform/:job_id",
        element: (
          <PrivateRouter>
            <ApplyForm></ApplyForm>
          </PrivateRouter>
        ),
      },
      {
        path: "/myapplications",
        element: (
          <PrivateRouter>
            <MyApplications></MyApplications>
          </PrivateRouter>
        ),
      },
      {
        path: "/application/:job_id",
        element: (
          <PrivateRouter>
            <ViewApplication></ViewApplication>
          </PrivateRouter>
        ),
        // Loader: ({ params }) =>
        //   fetch(`http://localhost:9000/job-application/${params.job_id}`),
      },
    ],
  },
]);
export default router;
