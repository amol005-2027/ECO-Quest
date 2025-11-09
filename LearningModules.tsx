import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Zap, Droplets, Recycle, TreePine, CheckCircle, Clock, Star } from 'lucide-react';

interface Module {
  id: string;
  title: string;
  description: string;
  icon: any;
  progress: number;
  points: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  completed: boolean;
  locked: boolean;
}

const LearningModules = () => {
  const [modules] = useState<Module[]>([
    {
      id: 'climate-basics',
      title: 'Climate Change Basics',
      description: 'Understanding global warming, greenhouse gases, and their impact on our planet.',
      icon: Zap,
      progress: 100,
      points: 150,
      difficulty: 'Easy',
      duration: '15 min',
      completed: true,
      locked: false
    },
    {
      id: 'water-conservation',
      title: 'Water Conservation',
      description: 'Learn practical ways to save water and protect our precious water resources.',
      icon: Droplets,
      progress: 60,
      points: 120,
      difficulty: 'Easy',
      duration: '12 min',
      completed: false,
      locked: false
    },
    {
      id: 'waste-management',
      title: 'Waste & Recycling',
      description: 'Master the 3 Rs: Reduce, Reuse, Recycle. Build a sustainable future.',
      icon: Recycle,
      progress: 0,
      points: 180,
      difficulty: 'Medium',
      duration: '20 min',
      completed: false,
      locked: false
    },
    {
      id: 'renewable-energy',
      title: 'Renewable Energy',
      description: 'Discover solar, wind, and other clean energy sources powering our future.',
      icon: TreePine,
      progress: 0,
      points: 200,
      difficulty: 'Medium',
      duration: '25 min',
      completed: false,
      locked: false
    },
    {
      id: 'biodiversity',
      title: 'Biodiversity & Ecosystems',
      description: 'Explore the interconnected web of life and how to protect endangered species.',
      icon: TreePine,
      progress: 0,
      points: 250,
      difficulty: 'Hard',
      duration: '30 min',
      completed: false,
      locked: true
    },
  ]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'badge-eco';
      case 'Medium':
        return 'badge-water';
      case 'Hard':
        return 'bg-gradient-to-r from-warning to-destructive text-warning-foreground px-3 py-1 rounded-full text-sm font-semibold';
      default:
        return 'badge-eco';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient-eco mb-2">Learning Modules</h2>
        <p className="text-muted-foreground">
          Master environmental concepts through interactive lessons and earn eco-points!
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="card-eco">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Your Learning Journey
          </h3>
          <div className="text-sm text-muted-foreground">
            2 of 5 completed
          </div>
        </div>
        <div className="progress-eco mb-2">
          <div className="progress-fill" style={{ width: '40%' }} />
        </div>
        <p className="text-sm text-muted-foreground">Keep going! You're making great progress.</p>
      </Card>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Card 
            key={module.id} 
            className={`card-eco relative ${module.locked ? 'opacity-60' : 'cursor-pointer'}`}
          >
            {/* Completion Badge */}
            {module.completed && (
              <div className="absolute -top-2 -right-2 bg-success rounded-full p-1">
                <CheckCircle className="h-4 w-4 text-success-foreground" />
              </div>
            )}

            {/* Module Icon */}
            <div className="flex items-center justify-center mb-4">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-primary/20 to-primary-glow/20 flex items-center justify-center">
                <module.icon className="h-8 w-8 text-primary animate-bounce-gentle" />
              </div>
            </div>

            {/* Module Info */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
              
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className={getDifficultyColor(module.difficulty)}>
                  {module.difficulty}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {module.duration}
                </div>
              </div>

              <div className="flex items-center justify-center gap-1 text-sm font-semibold text-warning">
                <Star className="h-4 w-4 fill-current" />
                {module.points} points
              </div>
            </div>

            {/* Progress */}
            {module.progress > 0 && (
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{module.progress}%</span>
                </div>
                <div className="progress-eco">
                  <div className="progress-fill" style={{ width: `${module.progress}%` }} />
                </div>
              </div>
            )}

            {/* Action Button */}
            <Button 
              className={`w-full ${module.completed ? "btn-eco" : "btn-earth"}`}
              disabled={module.locked}
              size="sm"
            >
              {module.locked 
                ? '🔒 Locked' 
                : module.completed 
                  ? 'Review' 
                  : module.progress > 0 
                    ? 'Continue' 
                    : 'Start Learning'
              }
            </Button>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="card-eco text-center bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="py-6">
          <TreePine className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
          <h3 className="text-xl font-bold text-gradient-eco mb-2">Complete More Lessons!</h3>
          <p className="text-muted-foreground mb-4">
            Earn more eco-points and unlock advanced modules by completing your current lessons.
          </p>
          <Button className="btn-eco">
            Continue Learning
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LearningModules;