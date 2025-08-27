import { createBrowserRouter } from "react-router-dom";
import Layout from "@components/Layout";
import {
  Home,
  Login,
  Senior,
  // System,
  // Manager,
  Care,
  SeniorDetail,
  CarePost,
} from "@pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "senior", element: <Senior /> },
      { path: "senior/:seniorId", element: <SeniorDetail /> },
      // { path: "system", element: <System /> },
      { path: "care", element: <Care /> },
      // { path: "manager", element: <Manager /> },
      { path: "care-post", element: <CarePost /> },
    ],
  },
]);
