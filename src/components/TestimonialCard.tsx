import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  business: string;
  content: string;
  rating: number;
}

export const TestimonialCard = ({ name, business, content, rating }: TestimonialCardProps) => {
  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm h-full">
      <CardContent className="p-6">
        <div className="mb-4 flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
          ))}
        </div>
        <p className="mb-4 text-muted-foreground italic">"{content}"</p>
        <div>
          <p className="font-bold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{business}</p>
        </div>
      </CardContent>
    </Card>
  );
};
