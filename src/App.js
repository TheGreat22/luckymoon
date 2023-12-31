// import logo from './logo.svg';
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./Components/Dashboard";
import LiqLock from "./Components/LiquidityLock";
import Layout from "./Components/Layout";
import Services from "./Components/Services";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "liqlock",
          element: <LiqLock />,
        },
        {
          path: "services",
          element: <Services />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
