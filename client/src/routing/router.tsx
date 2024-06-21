import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import { DEFAULT_ROUTE, MENU_ROUTE, NOT_FOUND_ROUTE} from "./routesConsts";
import MenuPage from "../components/pages/MenuPage";
import NotFoundPage from "../components/pages/NotFoundPage";

export const router = createBrowserRouter([
    {
      path: DEFAULT_ROUTE,
      element: (
          <HomePage />
      ),
    },
    {
      path: MENU_ROUTE,
      element: (
          <MenuPage />
      ),
    },
    {
      path: NOT_FOUND_ROUTE,
      element: (
          <NotFoundPage />
      ),
    },
  ]);
  