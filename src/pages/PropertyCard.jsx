import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ id, title, price, image }) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/listing/${id}`);
  };

  return (
    <Card className="overflow-hidden bg-contrast-high">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-contrast-high">{title}</h3>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-lg font-bold text-contrast-high">${price} / night</span>
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          onClick={handleViewClick}
        >
          View
        </button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
