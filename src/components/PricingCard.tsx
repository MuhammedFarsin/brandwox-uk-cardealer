import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const PricingCard = ({ title, price, description, features, popular }: PricingCardProps) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      popular ? "border-primary shadow-glow" : "border-border/50"
    }`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-accent px-4 py-1 text-xs font-bold text-accent-foreground">
          MOST POPULAR
        </div>
      )}
      <CardHeader className="text-center pb-8 pt-8">
        <CardTitle className="text-2xl font-bold mb-2">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground">/month</span>}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full ${popular ? "bg-gradient-accent shadow-glow-accent hover:shadow-xl" : ""}`}
          variant={popular ? "default" : "outline"}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
};
