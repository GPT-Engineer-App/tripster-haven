import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import PropertyCard from "./PropertyCard";
import { Link } from "react-router-dom";

const Index = () => {
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();

  const featuredListings = [
    { id: 1, title: "Cozy Cabin in the Woods", price: 100, image: "/placeholder.svg" },
    { id: 2, title: "Beachfront Paradise", price: 200, image: "/placeholder.svg" },
    { id: 3, title: "City Center Apartment", price: 150, image: "/placeholder.svg" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-contrast-high shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-500">Airbnb Clone</div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-contrast-medium hover:text-contrast-high">Home</Link></li>
              <li><Link to="/explore" className="text-contrast-medium hover:text-contrast-high">Explore</Link></li>
              <li><Link to="/my-trips" className="text-contrast-medium hover:text-contrast-high">My Trips</Link></li>
              <li><Link to="/login" className="text-contrast-medium hover:text-contrast-high">Login</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url("/placeholder.svg")'}}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Find your next stay</h1>
            <div className="bg-contrast-high p-4 rounded-lg shadow-lg flex space-x-2">
              <Input placeholder="Where are you going?" className="flex-grow text-contrast-high" />
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-[180px] justify-start text-left font-normal", !checkInDate && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkInDate ? format(checkInDate, "PPP") : <span>Check-in Date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={checkInDate} onSelect={setCheckInDate} initialFocus />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-[180px] justify-start text-left font-normal", !checkOutDate && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOutDate ? format(checkOutDate, "PPP") : <span>Check-out Date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={checkOutDate} onSelect={setCheckOutDate} initialFocus />
                </PopoverContent>
              </Popover>
              <Input type="number" placeholder="Guests" className="w-24 text-contrast-high" />
              <Button className="bg-red-500 text-white hover:bg-red-600">Search</Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-contrast-medium">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-contrast-high">Featured Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredListings.map((listing) => (
                <PropertyCard key={listing.id} {...listing} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-sm">Airbnb Clone is a project to demonstrate web development skills.</p>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="text-sm">Email: info@airbnbclone.com</p>
              <p className="text-sm">Phone: (123) 456-7890</p>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="text-sm">
                <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;