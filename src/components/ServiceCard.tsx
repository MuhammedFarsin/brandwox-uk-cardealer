import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/50">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
      <CardContent className="p-6">
        <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <Button variant="ghost" size="sm" className="group/btn text-primary hover:text-primary-foreground hover:bg-primary">
          Learn More
          <span className="ml-1 inline-block transition-transform group-hover/btn:translate-x-1">→</span>
        </Button>
      </CardContent>
    </Card>
  );
};
