import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  text: string;
}

export const TrustBadge = ({ icon: Icon, text }: TrustBadgeProps) => {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/60 backdrop-blur-sm px-4 py-2 shadow-sm">
      <Icon className="h-5 w-5 text-primary" />
      <span className="text-sm font-medium text-foreground">{text}</span>
    </div>
  );
};
