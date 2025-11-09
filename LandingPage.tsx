import { useState } from 'react';
import { Leaf, Trophy, BookOpen, Users, Calculator, Camera, Store, Crown, School, Star, ArrowRight, Play, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning Modules",
      description: "Engaging lessons on climate change, recycling, and conservation with quizzes and activities.",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Calculator,
      title: "Carbon Footprint Calculator",
      description: "Student-friendly tool to measure daily environmental impact and learn offset strategies.",
      color: "from-accent to-primary-glow"
    },
    {
      icon: Camera,
      title: "Peer Validation System",
      description: "Upload photos/videos of eco-actions for teacher and peer verification.",
      color: "from-warning to-primary"
    },
    {
      icon: Store,
      title: "Eco-Coins Virtual Store",
      description: "Earn coins through activities and spend them on digital rewards and upgrades.",
      color: "from-success to-primary-glow"
    },
    {
      icon: Trophy,
      title: "Leaderboards & Competition",
      description: "Compete with classmates and schools nationwide in eco-challenges and streaks.",
      color: "from-primary to-warning"
    },
    {
      icon: Crown,
      title: "Eco-Champ Recognition",
      description: "Highlight top performers weekly with special badges and community recognition.",
      color: "from-accent to-success"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Active Students", icon: Users },
    { number: "1,200+", label: "Partner Schools", icon: School },
    { number: "2.5M+", label: "Eco Points Earned", icon: Star },
    { number: "25,000+", label: "Trees Planted", icon: Leaf }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Grade 8 Student",
      school: "Delhi Public School",
      text: "EcoQuest made learning about environment so fun! I've planted 15 trees and earned 2,000 eco-coins!",
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar",
      role: "Environmental Science Teacher",
      school: "Kendriya Vidyalaya",
      text: "My students are now actively participating in eco-activities. The peer validation feature ensures real impact.",
      avatar: "RK"
    },
    {
      name: "Ananya Patel",
      role: "Principal",
      school: "Mumbai International School",
      text: "Our school ranking improved to #3 nationally. Students are genuinely excited about environmental conservation.",
      avatar: "AP"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-warning/10 to-primary-glow/10 rounded-full blur-3xl animate-bounce-gentle" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-success/20 to-primary/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}} />
      </div>

      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-xl sticky top-0 z-50 shadow-glow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center animate-glow">
                <Leaf className="h-7 w-7 text-primary-foreground animate-bounce-gentle" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient-eco">EcoQuest</h1>
                <p className="text-xs text-muted-foreground font-medium">Play, Learn, Save the Planet</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hover:bg-primary/10 transition-all duration-300" onClick={() => navigate('/dashboard')}>
                Login
              </Button>
              <Button className="btn-eco shadow-eco" onClick={() => navigate('/dashboard')}>
                Get Started Free
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <Badge className="badge-eco mb-8 text-base px-6 py-2 shadow-glow animate-bounce-gentle">
            🌱 Join 50,000+ Students Learning Climate Action
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Turn Your Students Into
            <span className="text-gradient-eco block mt-4 drop-shadow-lg">
              Climate Champions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Gamified environmental education platform that makes learning about climate change, 
            conservation, and sustainability engaging through interactive modules, competitions, and real-world actions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="btn-eco text-xl px-10 py-6 shadow-eco hover:shadow-glow"
              onClick={() => navigate('/dashboard')}
            >
              Start Learning Now
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-xl px-10 py-6 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play className="h-6 w-6 mr-3" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="card-eco text-center group hover:scale-110 transition-all duration-500 animate-glow" style={{animationDelay: `${index * 0.2}s`}}>
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary group-hover:animate-bounce-gentle" />
                <h3 className="text-3xl font-bold text-gradient-eco mb-2">{stat.number}</h3>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-muted/40 via-primary/5 to-accent/10 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="badge-water mb-6 text-lg px-6 py-2">✨ Powerful Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Everything Students Need to 
              <span className="text-gradient-eco drop-shadow-lg"> Become Eco-Heroes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive tools and features designed to make environmental education 
              interactive, measurable, and rewarding for both students and schools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Card key={index} className="card-eco group relative overflow-hidden hover:shadow-glow" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:animate-bounce-gentle transition-all duration-300 shadow-card`}>
                    <feature.icon className="h-8 w-8 text-white drop-shadow-sm" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient-eco transition-all duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-warning/20 to-success/20 rounded-full blur-2xl animate-bounce-gentle" />
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="badge-eco mb-6 text-lg px-6 py-2">🎯 Proven Results</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Why Schools & Students 
                  <span className="text-gradient-eco drop-shadow-lg">Love EcoQuest</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                {[
                  "Increased environmental awareness by 85% in participating schools",
                  "Real-world impact through verified eco-actions and peer validation",
                  "Gamified learning keeps students engaged and motivated long-term",
                  "Comprehensive curriculum aligned with environmental education standards",
                  "School recognition system boosts institutional green credentials"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center flex-shrink-0 mt-1 shadow-eco group-hover:animate-bounce-gentle">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-glow" />
              <Card className="card-eco p-10 relative z-10 hover:shadow-glow transition-all duration-500">
                <div className="text-center">
                  <div className="h-24 w-24 mx-auto mb-6 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center animate-bounce-gentle shadow-eco">
                    <Trophy className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-gradient-eco">St. Xavier's School</h3>
                  <Badge className="badge-eco mb-6 text-lg px-4 py-2 shadow-glow">#1 Eco-School Nationally</Badge>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    "Since joining EcoQuest, our students have planted over 500 trees and 
                    reduced school waste by 60%. The transformation is incredible!"
                  </p>
                  <p className="text-xl font-bold text-gradient-water">— Principal, Meera Joshi</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-muted/50 via-accent/5 to-primary/10 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="badge-water mb-6 text-lg px-6 py-2">💬 Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hear from Our 
              <span className="text-gradient-eco drop-shadow-lg">Eco-Champions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from students, teachers, and schools making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-eco group hover:shadow-glow relative overflow-hidden" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center text-white font-bold text-xl shadow-eco group-hover:animate-bounce-gentle">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-gradient-eco transition-all duration-300">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.school}</p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground text-lg italic leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.text}"
                  </blockquote>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-40 h-40 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-3xl animate-bounce-gentle" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        <div className="container mx-auto text-center relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-glow" />
            <Card className="card-eco max-w-5xl mx-auto p-12 relative z-10 hover:shadow-glow transition-all duration-500">
              <Badge className="badge-eco mb-8 text-xl px-8 py-3 shadow-glow animate-bounce-gentle">🚀 Join the Movement</Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Ready to Transform Your School Into an 
                <span className="text-gradient-eco drop-shadow-lg block mt-2">Eco-Champion Institution?</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Join thousands of schools already making a positive environmental impact. 
                Get started in minutes with our easy setup process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <Button 
                  size="lg" 
                  className="btn-eco text-xl px-12 py-6 shadow-eco hover:shadow-glow"
                  onClick={() => navigate('/dashboard')}
                >
                  Start Free Trial
                  <ArrowRight className="h-6 w-6 ml-3" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-xl px-12 py-6 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  Schedule Demo
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-success" />
                  <span className="font-medium">Free for all students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-success" />
                  <span className="font-medium">Easy school setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-success" />
                  <span className="font-medium">24/7 support</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-2xl animate-bounce-gentle" />
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-gradient-to-br from-card/80 to-muted/20 backdrop-blur-sm py-16 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center animate-glow">
                  <Leaf className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-gradient-eco">EcoQuest</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Empowering the next generation to become environmental stewards through 
                engaging, gamified education.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-gradient-water">Features</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Learning Modules</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Carbon Calculator</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Peer Validation</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Eco-Coins Store</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-gradient-water">For Schools</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">School Recognition</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Teacher Dashboard</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Progress Tracking</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Curriculum Integration</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-gradient-water">Support</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Help Center</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Contact Us</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Privacy Policy</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-12 pt-8 text-center">
            <p className="text-muted-foreground text-lg">
              © 2025 EcoQuest. All rights reserved. Made with <span className="text-primary animate-bounce-gentle inline-block">💚</span> for our planet.
            </p>
          </div>
        </div>
        
        {/* Footer decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-xl animate-float" />
          <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-r from-accent/15 to-transparent rounded-full blur-lg animate-bounce-gentle" />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;