import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import { BOOK_TABLE_ROUTE, CART_ROUTE, CHECKOUT_ROUTE, DEFAULT_ROUTE, MENU_ROUTE, NOT_FOUND_ROUTE, DELIVERY_ROUTE} from "./routesConsts";
import MenuPage from "../components/pages/MenuPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import CartPage from "../components/pages/CartPage";
import CheckoutPage from "../components/pages/CheckoutPage";
import BookTablePage from "../components/pages/BookTablePage";
import DeliveryPage from "../components/pages/DeliveryPage";

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
    {
      path: CART_ROUTE,
      element: (
          <CartPage />
      ),
    },
    {
      path: BOOK_TABLE_ROUTE,
      element: (
          <BookTablePage />
      ),
    },
    {
      path: CHECKOUT_ROUTE,
      element: (
          <CheckoutPage />
      ),
    },
    {
      path: DELIVERY_ROUTE,
      element: (
          <DeliveryPage />
      ),
    },
  ]);
  