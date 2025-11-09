import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { BookOpen, User, MapPin, Calendar, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

interface EcoHero {
  id: string;
  name: string;
  age?: number;
  location: string;
  avatar?: string;
  title: string;
  story: string;
  achievement: string;
  impact: string;
  category: 'local' | 'national' | 'global';
  likes: number;
  dateAdded: string;
}

const EcoStories = () => {
  const [activeCategory, setActiveCategory] = useState<'local' | 'national' | 'global'>('local');
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const ecoHeroes: EcoHero[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      age: 16,
      location: 'Mumbai, Maharashtra',
      title: 'Plastic-Free Campus Champion',
      story: 'Priya noticed the huge amount of plastic waste in her school cafeteria. She started a campaign to replace all single-use plastics with biodegradable alternatives. Within 6 months, her school became completely plastic-free!',
      achievement: 'Eliminated 500kg of plastic waste monthly from her school',
      impact: 'Her model is now adopted by 15 other schools in Mumbai',
      category: 'local',
      likes: 245,
      dateAdded: '2024-01-15'
    },
    {
      id: '2',
      name: 'Arjun Patel',
      age: 14,
      location: 'Ahmedabad, Gujarat',
      title: 'Solar Energy Pioneer',
      story: 'When frequent power cuts affected his studies, Arjun learned about solar energy. He convinced his school to install solar panels and now teaches other students about renewable energy through workshops.',
      achievement: 'Helped install 50kW solar system saving 2000 units monthly',
      impact: 'Trained over 200 students in solar energy basics',
      category: 'local',
      likes: 189,
      dateAdded: '2024-02-08'
    },
    {
      id: '3',
      name: 'Kiran Bedi',
      location: 'Tihar Jail, New Delhi',
      title: 'Prison Transformation Leader',
      story: 'Former IPS officer Kiran Bedi transformed Tihar Jail into an eco-friendly model prison. She introduced organic farming, waste segregation, and renewable energy, proving that environmental change can happen anywhere.',
      achievement: 'Created India\'s first green prison with zero waste policy',
      impact: 'Model replicated in 50+ prisons across India',
      category: 'national',
      likes: 1250,
      dateAdded: '2024-01-20'
    },
    {
      id: '4',
      name: 'Vandana Shiva',
      location: 'Uttarakhand, India',
      title: 'Seed Sovereignty Champion',
      story: 'Environmental activist Vandana Shiva has spent decades protecting indigenous seeds and promoting organic farming. She founded Navdanya, which has helped establish 150+ community seed banks across India.',
      achievement: 'Conserved over 5000 native seed varieties',
      impact: 'Empowered 500,000+ farmers to practice sustainable agriculture',
      category: 'national',
      likes: 2180,
      dateAdded: '2024-02-12'
    },
    {
      id: '5',
      name: 'Greta Thunberg',
      location: 'Stockholm, Sweden',
      title: 'Global Climate Activist',
      story: 'At just 15, Greta started skipping school on Fridays to protest climate inaction. Her solo protest grew into a global movement inspiring millions of young people worldwide to demand climate action.',
      achievement: 'Inspired 6 million+ young climate activists globally',
      impact: 'Led to climate emergency declarations in multiple countries',
      category: 'global',
      likes: 5420,
      dateAdded: '2024-02-01'
    },
    {
      id: '6',
      name: 'Wangari Maathai',
      location: 'Nairobi, Kenya',
      title: 'Tree Planting Pioneer',
      story: 'Nobel Peace Prize winner Wangari Maathai founded the Green Belt Movement, empowering women to plant trees and fight deforestation while improving their livelihoods.',
      achievement: 'Led to planting of 51 million trees across Kenya',
      impact: 'Restored degraded landscapes and empowered 30,000+ women',
      category: 'global',
      likes: 3890,
      dateAdded: '2024-01-28'
    }
  ];

  const categories = [
    { id: 'local' as const, label: 'Local Heroes', icon: MapPin },
    { id: 'national' as const, label: 'National Icons', icon: User },
    { id: 'global' as const, label: 'Global Leaders', icon: BookOpen },
  ];

  const filteredStories = ecoHeroes.filter(hero => hero.category === activeCategory);
  const currentStory = filteredStories[currentStoryIndex] || filteredStories[0];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % filteredStories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient-eco mb-2">Eco Heroes</h2>
        <p className="text-muted-foreground">
          Be inspired by real changemakers who are making a difference for our planet
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center">
        <div className="flex gap-2 bg-card/50 p-2 rounded-2xl backdrop-blur-sm">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              className={`flex items-center gap-2 rounded-xl transition-all duration-200 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-eco' 
                  : 'hover:bg-muted/50'
              }`}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentStoryIndex(0);
              }}
            >
              <category.icon className="h-4 w-4" />
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Story */}
      {currentStory && (
        <Card className="card-eco">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Story of the Day
            </h3>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevStory}
                disabled={filteredStories.length <= 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground px-2">
                {currentStoryIndex + 1} of {filteredStories.length}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextStory}
                disabled={filteredStories.length <= 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Hero Profile */}
            <div className="space-y-4">
              <div className="text-center">
                <Avatar className="h-20 w-20 mx-auto mb-3 ring-2 ring-primary/20">
                  <AvatarImage src={currentStory.avatar} />
                  <AvatarFallback className="text-lg font-bold">
                    {currentStory.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-lg font-bold text-gradient-eco">{currentStory.name}</h4>
                {currentStory.age && (
                  <p className="text-sm text-muted-foreground">Age: {currentStory.age}</p>
                )}
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {currentStory.location}
                </p>
                <Badge variant="secondary" className="mt-2">
                  {currentStory.title}
                </Badge>
              </div>
            </div>

            {/* Story Content */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h5 className="font-semibold mb-2 text-primary">The Story</h5>
                <p className="text-muted-foreground leading-relaxed">{currentStory.story}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h6 className="font-semibold mb-1 text-success">Key Achievement</h6>
                  <p className="text-sm text-muted-foreground">{currentStory.achievement}</p>
                </div>
                <div>
                  <h6 className="font-semibold mb-1 text-accent">Impact Created</h6>
                  <p className="text-sm text-muted-foreground">{currentStory.impact}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(currentStory.dateAdded).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-3 w-3 text-red-500" />
                    {currentStory.likes} likes
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                  Share Story
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* All Stories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStories.map((hero, index) => (
          <Card
            key={hero.id}
            className={`card-eco cursor-pointer transition-all duration-200 ${
              index === currentStoryIndex ? 'ring-2 ring-primary/30' : ''
            }`}
            onClick={() => setCurrentStoryIndex(index)}
          >
            <div className="text-center mb-3">
              <Avatar className="h-12 w-12 mx-auto mb-2">
                <AvatarFallback className="text-sm">
                  {hero.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h4 className="font-semibold text-sm text-gradient-eco">{hero.name}</h4>
              <p className="text-xs text-muted-foreground">{hero.location}</p>
            </div>
            
            <Badge variant="outline" className="text-xs mb-2 w-full justify-center">
              {hero.title}
            </Badge>
            
            <p className="text-xs text-muted-foreground line-clamp-3 mb-3">
              {hero.story.substring(0, 100)}...
            </p>
            
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Heart className="h-3 w-3 text-red-500" />
                {hero.likes}
              </div>
              <span>{hero.category}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Inspiration CTA */}
      <Card className="card-eco text-center bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="py-6">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4 animate-glow" />
          <h3 className="text-xl font-bold text-gradient-eco mb-2">Be the Next Eco Hero!</h3>
          <p className="text-muted-foreground mb-4">
            Every great change starts with a single person. Share your own eco-story and inspire others!
          </p>
          <Button className="btn-eco">
            Share Your Story
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default EcoStories;