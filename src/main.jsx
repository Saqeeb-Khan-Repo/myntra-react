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
import Beauty from "./pages/nav/beauty";
import Men from "./pages/nav/Men";
import Women from "./pages/nav/Women";
import Studio from "./pages/nav/Studio";
import Living from "./pages/nav/Living";
import Kids from "./pages/nav/Kids";

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
      { path: "/beauty", element: <Beauty /> },
      { path: "/Men", element: <Men /> },
      { path: "/Women", element: <Women /> },
      { path: "/Living", element: <Living /> },
      { path: "/Studio", element: <Studio /> },
      { path: "/Kids", element: <Kids /> },
     
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
