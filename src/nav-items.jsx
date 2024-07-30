import { Home, Compass, Briefcase, LogIn } from "lucide-react";
import Index from "./pages/Index.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import MyTripsPage from "./pages/MyTripsPage.jsx";
import ListingPage from "./pages/ListingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Booking",
    to: "/booking",
    icon: <Compass className="h-4 w-4" />,
    page: <BookingPage />,
  },
  {
    title: "My Trips",
    to: "/my-trips",
    icon: <Briefcase className="h-4 w-4" />,
    page: <MyTripsPage />,
  },
  {
    title: "Listing",
    to: "/listing/:id",
    icon: null,
    page: <ListingPage />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <LogIn className="h-4 w-4" />,
    page: <LoginPage />,
  },
];