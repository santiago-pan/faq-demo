import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />} path="/" errorElement={<div>Ups 404!</div>}>
        <Route
          element={<App />}
          path="/:section"
          errorElement={<div>Ups 404!</div>}
        >
          <Route
            element={<App />}
            path="/:section/:category"
            errorElement={<div>Ups 404!</div>}
          />
        </Route>
      </Route>
    </>
  )
);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
