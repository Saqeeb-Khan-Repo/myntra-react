import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Header.css";
import App from "./routes/App";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Bag from "./routes/Bag";
import Home from "./routes/Home";
import { Provider } from "react-redux";
import myntraStore from "./store/index";
import Contact from "./pages/Login/contact";
import Wishlist from "./pages/Login/wishlist";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/bag", element: <Bag /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Wishlist", element: <Wishlist /> },
    ],
    errorElement: <div>Page Not Found!</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
