import { Card, CardContent } from "@/components/ui/card";
import { OfferingItem } from "@/lib/offeringsData";

interface OfferingCardProps {
  offering: Partial<OfferingItem>;
  index: number;
}

export const OfferingCard = ({ offering, index }: OfferingCardProps) => {
  const IconComponent = offering.icon;
  // Ensure color is a string for class generation, defaulting if undefined
  const colorClass = offering.color || 'primary';

  const getColorClasses = (color: string | undefined) => {
    if (!color) return 'from-primary/10 to-primary-light/20';
    const colorMap = {
      'primary': 'from-primary/10 to-primary-light/20',
      'secondary': 'from-secondary/10 to-secondary-light/20',
      'educational-blue': 'from-educational-blue/10 to-educational-blue-light/20',
      'accent': 'from-accent/10 to-accent-light/20'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <Card 
      className={`shadow-medium hover:shadow-strong transition-all duration-500 border-0 bg-gradient-to-br ${getColorClasses(colorClass)} group hover:-translate-y-2 animate-fade-up`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <CardContent className="p-8 h-full">
        {/* Icon and Title */}
        <div className="flex items-start space-x-4 mb-6">
          {IconComponent && (
            <div className={`w-16 h-16 bg-gradient-to-br from-${colorClass} to-${colorClass}/80 rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
          )}
          <div className="flex-1">
            {offering.title && (
              <h3 className="text-xl font-bold text-primary leading-tight group-hover:text-primary/80 transition-colors">
                {offering.title}
              </h3>
            )}
            <div className="w-16 h-1 bg-gradient-accent rounded-full mt-2"></div>
          </div>
        </div>

        {/* Description */}
        {offering.description && (
          <p className="text-foreground mb-6 leading-relaxed">
            {offering.description}
          </p>
        )}

        {/* Features */}
        {offering.features && offering.features.length > 0 && (
          <div className="space-y-3 mb-6">
            {offering.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full bg-${colorClass} shrink-0 mt-2`}></div>
                <span className="text-muted-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
