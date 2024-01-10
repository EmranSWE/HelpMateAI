import { Star } from "lucide-react";

const StarRating = ({ rating }: { rating: number }) => {
  const roundedRating = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>
      {index < roundedRating ? <Star style={{ fill: "red" }} /> : <Star />}
    </span>
  ));

  return <div className="flex">{stars}</div>;
};

export default StarRating;
