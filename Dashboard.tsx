import { useState } from 'react';
import { Leaf, Trophy, BookOpen, Users, Target, Calendar, Calculator, Camera, Store, Crown, School, Coins } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import LearningModules from '@/components/LearningModules';
import EcoProgress from '@/components/EcoProgress';
import AchievementBadges from '@/components/AchievementBadges';
import Leaderboard from '@/components/Leaderboard';
import EcoJournal from '@/components/EcoJournal';
import EcoStories from '@/components/EcoStories';
import CarbonCalculator from '@/components/CarbonCalculator';
import PeerValidation from '@/components/PeerValidation';
import EcoCoinsStore from '@/components/EcoCoinsStore';
import EcoChampWeek from '@/components/EcoChampWeek';
import SchoolRecognition from '@/components/SchoolRecognition';
import EcoChatbot from '@/components/EcoChatbot';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [ecoPoints, setEcoPoints] = useState(1247);
  const [ecoCoins, setEcoCoins] = useState(850);
  const [streak, setStreak] = useState(12);

  const tabConfig = [
    { id: 'dashboard', label: 'Dashboard', icon: Target },
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'stories', label: 'Stories', icon: Users },
    { id: 'carbon', label: 'Calculator', icon: Calculator },
    { id: 'validation', label: 'Share', icon: Camera },
    { id: 'store', label: 'Store', icon: Store },
    { id: 'champ', label: 'Champions', icon: Crown },
    { id: 'schools', label: 'Schools', icon: School },
    { id: 'compete', label: 'Compete', icon: Trophy },
    { id: 'journal', label: 'Journal', icon: Calendar },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'learn':
        return <LearningModules />;
      case 'stories':
        return <EcoStories />;
      case 'carbon':
        return <CarbonCalculator />;
      case 'validation':
        return <PeerValidation />;
      case 'store':
        return <EcoCoinsStore />;
      case 'champ':
        return <EcoChampWeek />;
      case 'schools':
        return <SchoolRecognition />;
      case 'compete':
        return <Leaderboard />;
      case 'journal':
        return <EcoJournal />;
      default:
        return (
          <div className="space-y-6">
            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="card-eco text-center">
                <div className="flex items-center justify-center mb-2">
                  <Leaf className="h-8 w-8 text-primary animate-bounce-gentle" />
                </div>
                <h3 className="text-2xl font-bold text-gradient-eco">{ecoPoints}</h3>
                <p className="text-muted-foreground">Eco Points</p>
              </Card>
              
              <Card className="card-eco text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-8 w-8 text-warning animate-glow" />
                </div>
                <h3 className="text-2xl font-bold text-gradient-water">{streak} days</h3>
                <p className="text-muted-foreground">Current Streak</p>
              </Card>
              
              <Card className="card-eco text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="h-8 w-8 text-accent animate-float" />
                </div>
                <h3 className="text-2xl font-bold">#3</h3>
                <p className="text-muted-foreground">Class Rank</p>
              </Card>
            </div>

            {/* Progress Overview */}
            <EcoProgress />
            
            {/* Achievements */}
            <AchievementBadges />
            
            {/* Quick Actions */}
            <Card className="card-eco">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                Today's Eco Actions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button className="btn-eco justify-start h-auto py-4 px-6">
                  <div className="text-left">
                    <div className="font-semibold">Plant a Tree</div>
                    <div className="text-xs opacity-80">+50 points</div>
                  </div>
                </Button>
                <Button className="btn-earth justify-start h-auto py-4 px-6">
                  <div className="text-left">
                    <div className="font-semibold">Recycle Waste</div>
                    <div className="text-xs opacity-80">+30 points</div>
                  </div>
                </Button>
                <Button className="btn-eco justify-start h-auto py-4 px-6">
                  <div className="text-left">
                    <div className="font-semibold">Water Conservation</div>
                    <div className="text-xs opacity-80">+25 points</div>
                  </div>
                </Button>
                <Button className="btn-earth justify-start h-auto py-4 px-6">
                  <div className="text-left">
                    <div className="font-semibold">Energy Saving</div>
                    <div className="text-xs opacity-80">+40 points</div>
                  </div>
                </Button>
              </div>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient-eco">EcoQuest</h1>
                <p className="text-xs text-muted-foreground">Play, Learn, Save the Planet</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="badge-eco">
                {ecoPoints} Points
              </div>
              <div className="badge-water flex items-center gap-1">
                <Coins className="h-3 w-3" />
                {ecoCoins}
              </div>
              <Button variant="ghost" size="sm">
                <Users className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-card/50 p-2 rounded-2xl backdrop-blur-sm">
          {tabConfig.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              className={`flex items-center gap-2 rounded-xl transition-all duration-200 ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-eco' 
                  : 'hover:bg-muted/50'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content */}
        {renderContent()}
      </div>
      
      {/* Floating Chatbot */}
      <EcoChatbot />
    </div>
  );
};

export default Index;