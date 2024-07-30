import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const ListingPage = () => {
  const { id } = useParams();
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [guests, setGuests] = useState(1);

  // Mock data for the listing
  const listing = {
    id,
    title: "Luxury Beachfront Villa",
    description: "Experience the ultimate beachfront getaway in this stunning villa. Enjoy breathtaking ocean views, private beach access, and luxurious amenities.",
    price: 300,
    image: "/placeholder.svg",
  };

  const handleBooking = () => {
    console.log("Booking submitted:", { checkInDate, checkOutDate, guests });
    // Here you would typically send this data to your backend
    alert("Booking submitted successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={listing.image} alt={listing.title} className="w-full h-[400px] object-cover rounded-lg mb-4" />
            <h1 className="text-3xl font-bold mb-4 text-contrast-high">{listing.title}</h1>
            <p className="text-contrast-medium mb-4">{listing.description}</p>
          </div>
          <div>
            <div className="bg-contrast-high p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 text-contrast-high">Book Your Stay</h2>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !checkInDate && "text-muted-foreground")}>
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
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !checkOutDate && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOutDate ? format(checkOutDate, "PPP") : <span>Check-out Date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkOutDate} onSelect={setCheckOutDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <Input 
                  type="number" 
                  placeholder="Number of guests" 
                  className="text-contrast-high" 
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  min={1}
                />
                <div className="text-xl font-bold text-contrast-high mb-4">
                  Total: ${listing.price * (guests || 1)} / night
                </div>
                <Button className="w-full bg-red-500 text-white hover:bg-red-600" onClick={handleBooking}>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;