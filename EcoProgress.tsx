import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TreePine, Droplets, Recycle, Zap, Target } from 'lucide-react';

interface ProgressCategory {
  id: string;
  name: string;
  icon: any;
  current: number;
  target: number;
  unit: string;
  color: string;
  description: string;
}

const EcoProgress = () => {
  const categories: ProgressCategory[] = [
    {
      id: 'trees',
      name: 'Trees Planted',
      icon: TreePine,
      current: 12,
      target: 25,
      unit: 'trees',
      color: 'from-primary to-primary-glow',
      description: 'Contributing to reforestation efforts'
    },
    {
      id: 'water',
      name: 'Water Saved',
      icon: Droplets,
      current: 150,
      target: 300,
      unit: 'liters',
      color: 'from-accent to-primary-glow',
      description: 'Daily water conservation habits'
    },
    {
      id: 'waste',
      name: 'Waste Recycled',
      icon: Recycle,
      current: 45,
      target: 100,
      unit: 'kg',
      color: 'from-warning to-primary',
      description: 'Proper waste segregation & recycling'
    },
    {
      id: 'energy',
      name: 'Energy Conserved',
      icon: Zap,
      current: 80,
      target: 200,
      unit: 'kWh',
      color: 'from-primary-glow to-warning',
      description: 'Reducing electricity consumption'
    }
  ];

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <Card className="card-eco">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Environmental Impact Progress
        </h3>
        <p className="text-muted-foreground">
          Track your real-world environmental contributions and see your impact grow!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => {
          const percentage = getProgressPercentage(category.current, category.target);
          
          return (
            <div key={category.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-r ${category.color} p-0.5`}>
                    <div className="h-full w-full rounded-lg bg-background flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{category.name}</h4>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gradient-eco">
                    {category.current}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    of {category.target} {category.unit}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="progress-eco">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-500 ease-out`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{Math.round(percentage)}% completed</span>
                  <span>{category.target - category.current} {category.unit} to go</span>
                </div>
              </div>

              {/* Milestone indicator */}
              {percentage >= 50 && percentage < 100 && (
                <div className="text-xs text-success font-medium">
                  🌟 Halfway there! Keep going!
                </div>
              )}
              {percentage >= 100 && (
                <div className="text-xs text-success font-medium">
                  🎉 Goal achieved! Amazing work!
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Overall Progress Summary */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-gradient-eco mb-1">
            {Math.round(categories.reduce((acc, cat) => acc + getProgressPercentage(cat.current, cat.target), 0) / categories.length)}%
          </div>
          <p className="text-sm text-muted-foreground">Overall Environmental Impact</p>
        </div>
      </div>
    </Card>
  );
};

export default EcoProgress;