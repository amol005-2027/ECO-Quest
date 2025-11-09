import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award, Crown, Users, School, Globe, TrendingUp } from 'lucide-react';

interface LeaderboardEntry {
  id: string;
  name: string;
  avatar?: string;
  points: number;
  rank: number;
  streak: number;
  completedActions: number;
  badge?: string;
}

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState<'class' | 'school' | 'global'>('class');

  const leaderboardData = {
    class: [
      { id: '1', name: 'Emma Watson', points: 2450, rank: 1, streak: 25, completedActions: 48, badge: 'Eco Legend' },
      { id: '2', name: 'Alex Green', points: 2180, rank: 2, streak: 18, completedActions: 42, badge: 'Water Guardian' },
      { id: '3', name: 'You', points: 1247, rank: 3, streak: 12, completedActions: 28, badge: 'Green Thumb' },
      { id: '4', name: 'Sarah Lee', points: 1156, rank: 4, streak: 8, completedActions: 25, badge: 'Tree Planter' },
      { id: '5', name: 'Mike Johnson', points: 987, rank: 5, streak: 15, completedActions: 22, badge: 'Recycling Hero' },
      { id: '6', name: 'Lisa Chen', points: 834, rank: 6, streak: 6, completedActions: 19, badge: 'Energy Saver' },
      { id: '7', name: 'Tom Wilson', points: 756, rank: 7, streak: 10, completedActions: 16 },
      { id: '8', name: 'Amy Davis', points: 623, rank: 8, streak: 4, completedActions: 14 },
    ],
    school: [
      { id: '1', name: 'Class 10A', points: 15420, rank: 1, streak: 22, completedActions: 156, badge: 'Top Class' },
      { id: '2', name: 'Class 9B', points: 13890, rank: 2, streak: 19, completedActions: 142, badge: 'Eco Leaders' },
      { id: '3', name: 'Your Class (8C)', points: 12470, rank: 3, streak: 16, completedActions: 128 },
      { id: '4', name: 'Class 11A', points: 11230, rank: 4, streak: 14, completedActions: 115 },
      { id: '5', name: 'Class 7A', points: 9860, rank: 5, streak: 12, completedActions: 98 },
    ],
    global: [
      { id: '1', name: 'GreenVale School', points: 45620, rank: 1, streak: 45, completedActions: 892, badge: 'Global Leader' },
      { id: '2', name: 'EcoHigh Academy', points: 38940, rank: 2, streak: 38, completedActions: 756, badge: 'Eco Champion' },
      { id: '3', name: 'Your School', points: 32180, rank: 3, streak: 32, completedActions: 634 },
      { id: '4', name: 'Nature Institute', points: 28750, rank: 4, streak: 28, completedActions: 587 },
      { id: '5', name: 'Earth School', points: 24330, rank: 5, streak: 24, completedActions: 498 },
    ]
  };

  const tabConfig = [
    { id: 'class' as const, label: 'Class', icon: Users },
    { id: 'school' as const, label: 'School', icon: School },
    { id: 'global' as const, label: 'Global', icon: Globe },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-muted-foreground font-semibold">#{rank}</span>;
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900';
    if (rank === 2) return 'bg-gradient-to-r from-gray-300 to-gray-500 text-gray-900';
    if (rank === 3) return 'bg-gradient-to-r from-amber-400 to-amber-600 text-amber-900';
    return 'bg-muted text-muted-foreground';
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient-eco mb-2">Leaderboard</h2>
        <p className="text-muted-foreground">
          Compete with fellow eco-warriors and see who's making the biggest impact!
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="flex gap-2 bg-card/50 p-2 rounded-2xl backdrop-blur-sm">
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
      </div>

      {/* Top 3 Podium */}
      <Card className="card-eco">
        <div className="text-center mb-6">
          <Trophy className="h-8 w-8 text-primary mx-auto mb-2 animate-bounce-gentle" />
          <h3 className="text-xl font-semibold">Top Performers</h3>
          <p className="text-sm text-muted-foreground">This month's eco champions</p>
        </div>
        
        <div className="flex justify-center items-end gap-4 mb-6">
          {leaderboardData[activeTab].slice(0, 3).map((entry, index) => (
            <div
              key={entry.id}
              className={`text-center ${index === 0 ? 'order-2' : index === 1 ? 'order-1' : 'order-3'}`}
            >
              <div className={`relative mb-3 ${index === 0 ? 'scale-110' : ''}`}>
                <div className={`h-16 w-16 rounded-2xl ${getRankBadge(entry.rank)} p-0.5 mx-auto`}>
                  <div className="h-full w-full rounded-xl bg-background flex items-center justify-center">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="text-xs font-bold">
                        {entry.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1">
                  {getRankIcon(entry.rank)}
                </div>
              </div>
              
              <h4 className="font-semibold text-sm mb-1">{entry.name}</h4>
              <div className="text-lg font-bold text-gradient-eco mb-1">
                {entry.points.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">
                {entry.streak} day streak
              </div>
              {entry.badge && (
                <Badge variant="secondary" className="text-xs mt-1">
                  {entry.badge}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Full Leaderboard */}
      <Card className="card-eco">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Full Rankings
          </h3>
          <Badge variant="outline" className="text-xs">
            Updated live
          </Badge>
        </div>

        <div className="space-y-3">
          {leaderboardData[activeTab].map((entry) => (
            <div
              key={entry.id}
              className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                entry.name.includes('You') || entry.name.includes('Your')
                  ? 'bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20'
                  : 'bg-muted/30 hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8">
                  {getRankIcon(entry.rank)}
                </div>
                
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">
                    {entry.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <h4 className="font-semibold text-sm">{entry.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{entry.completedActions} actions</span>
                    <span>•</span>
                    <span>{entry.streak} day streak</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-lg font-bold text-gradient-eco">
                  {entry.points.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">points</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Challenge CTA */}
      <Card className="card-eco text-center bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="py-6">
          <Trophy className="h-12 w-12 text-primary mx-auto mb-4 animate-glow" />
          <h3 className="text-xl font-bold text-gradient-eco mb-2">Climb Higher!</h3>
          <p className="text-muted-foreground mb-4">
            Complete more eco-actions and lessons to move up the leaderboard.
          </p>
          <Button className="btn-eco">
            Take Eco Action
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Leaderboard;