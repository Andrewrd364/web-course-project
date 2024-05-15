import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import { DEFAULT_ROUTE} from "./routesConsts";

export const router = createBrowserRouter([
    {
      path: DEFAULT_ROUTE,
      element: (
          <HomePage />
      ),
    },
  ]);
  