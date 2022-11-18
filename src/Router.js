import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Users from "./pages/Users";

export default Router = () => {
  let element = useRoutes([
    {
      element: <Login />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      element: <Main />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/user",
          element: <Users />,
        },
      ],
    },
  ]);
  return element;
};
