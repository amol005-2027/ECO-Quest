import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Calculator, Car, Home, Utensils, TreePine, Lightbulb, Droplets, RotateCcw } from 'lucide-react';

interface CarbonData {
  transport: number;
  electricity: number;
  water: number;
  food: number;
  waste: number;
}

const CarbonCalculator = () => {
  const [carbonData, setCarbonData] = useState<CarbonData>({
    transport: 0,
    electricity: 0,
    water: 0,
    food: 0,
    waste: 0
  });
  
  const [transportMode, setTransportMode] = useState('');
  const [dietType, setDietType] = useState('');
  const [calculated, setCalculated] = useState(false);

  const calculateCarbon = () => {
    const transport = carbonData.transport * getTransportFactor(transportMode);
    const electricity = carbonData.electricity * 0.82; // kg CO2 per kWh
    const water = carbonData.water * 0.0004; // kg CO2 per liter
    const food = carbonData.food * getDietFactor(dietType);
    const waste = carbonData.waste * 0.5; // kg CO2 per kg waste

    return {
      transport,
      electricity,
      water,
      food,
      waste,
      total: transport + electricity + water + food + waste
    };
  };

  const getTransportFactor = (mode: string) => {
    switch (mode) {
      case 'car': return 0.21; // kg CO2 per km
      case 'bus': return 0.08;
      case 'train': return 0.04;
      case 'bike': return 0;
      case 'walk': return 0;
      default: return 0.15;
    }
  };

  const getDietFactor = (diet: string) => {
    switch (diet) {
      case 'vegan': return 1.5; // kg CO2 per day
      case 'vegetarian': return 2.5;
      case 'mixed': return 4.0;
      case 'meat-heavy': return 7.0;
      default: return 3.0;
    }
  };

  const results = calculated ? calculateCarbon() : null;
  const treesToOffset = results ? Math.ceil(results.total * 365 / 22) : 0; // 1 tree absorbs ~22kg CO2/year

  const resetCalculator = () => {
    setCarbonData({
      transport: 0,
      electricity: 0,
      water: 0,
      food: 0,
      waste: 0
    });
    setTransportMode('');
    setDietType('');
    setCalculated(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient-eco mb-2">Carbon Footprint Calculator</h2>
        <p className="text-muted-foreground">
          Discover your daily environmental impact and learn how to reduce it!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Calculator Form */}
        <Card className="card-eco">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Daily Habits Quiz
            </h3>
            <p className="text-muted-foreground text-sm">
              Enter your daily activities to calculate your carbon footprint
            </p>
          </div>

          <div className="space-y-6">
            {/* Transport */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2 font-semibold">
                <Car className="h-4 w-4 text-primary" />
                Daily Transport
              </Label>
              <Select value={transportMode} onValueChange={setTransportMode}>
                <SelectTrigger>
                  <SelectValue placeholder="Primary mode of transport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="walk">Walking</SelectItem>
                  <SelectItem value="bike">Bicycle</SelectItem>
                  <SelectItem value="bus">Public Bus</SelectItem>
                  <SelectItem value="train">Train/Metro</SelectItem>
                  <SelectItem value="car">Private Car</SelectItem>
                </SelectContent>
              </Select>
              <div>
                <Label className="text-sm text-muted-foreground">Distance traveled per day (km)</Label>
                <Input
                  type="number"
                  placeholder="e.g., 10"
                  value={carbonData.transport || ''}
                  onChange={(e) => setCarbonData({...carbonData, transport: parseFloat(e.target.value) || 0})}
                />
              </div>
            </div>

            {/* Electricity */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2 font-semibold">
                <Lightbulb className="h-4 w-4 text-primary" />
                Home Electricity Use
              </Label>
              <div>
                <Label className="text-sm text-muted-foreground">Hours of electrical appliances used daily</Label>
                <Input
                  type="number"
                  placeholder="e.g., 6 hours (TV, lights, fan, etc.)"
                  value={carbonData.electricity || ''}
                  onChange={(e) => setCarbonData({...carbonData, electricity: parseFloat(e.target.value) || 0})}
                />
              </div>
            </div>

            {/* Water */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2 font-semibold">
                <Droplets className="h-4 w-4 text-primary" />
                Water Usage
              </Label>
              <div>
                <Label className="text-sm text-muted-foreground">Liters of water used daily</Label>
                <Input
                  type="number"
                  placeholder="e.g., 150 (bathing, drinking, washing)"
                  value={carbonData.water || ''}
                  onChange={(e) => setCarbonData({...carbonData, water: parseFloat(e.target.value) || 0})}
                />
              </div>
            </div>

            {/* Food */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2 font-semibold">
                <Utensils className="h-4 w-4 text-primary" />
                Diet Type
              </Label>
              <Select value={dietType} onValueChange={setDietType}>
                <SelectTrigger>
                  <SelectValue placeholder="Your typical diet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegan">Vegan (no animal products)</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian (no meat)</SelectItem>
                  <SelectItem value="mixed">Mixed diet</SelectItem>
                  <SelectItem value="meat-heavy">Meat-heavy diet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Waste */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2 font-semibold">
                <Home className="h-4 w-4 text-primary" />
                Waste Generation
              </Label>
              <div>
                <Label className="text-sm text-muted-foreground">Kg of waste generated daily</Label>
                <Input
                  type="number"
                  placeholder="e.g., 0.5"
                  value={carbonData.waste || ''}
                  onChange={(e) => setCarbonData({...carbonData, waste: parseFloat(e.target.value) || 0})}
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                className="btn-eco flex-1"
                onClick={() => setCalculated(true)}
                disabled={!transportMode || !dietType}
              >
                Calculate My Footprint
              </Button>
              <Button variant="outline" onClick={resetCalculator}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Results */}
        <Card className="card-eco">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <TreePine className="h-5 w-5 text-primary" />
              Your Carbon Footprint
            </h3>
            <p className="text-muted-foreground text-sm">
              Daily CO₂ emissions breakdown and offset recommendations
            </p>
          </div>

          {results ? (
            <div className="space-y-6">
              {/* Total Footprint */}
              <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-xl">
                <div className="text-3xl font-bold text-gradient-eco mb-2">
                  {results.total.toFixed(1)} kg
                </div>
                <p className="text-muted-foreground">CO₂ per day</p>
                <p className="text-sm text-muted-foreground mt-2">
                  That's {(results.total * 365).toFixed(0)} kg per year
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                <h4 className="font-semibold">Emission Sources</h4>
                
                {[
                  { name: 'Transport', value: results.transport, icon: Car },
                  { name: 'Electricity', value: results.electricity, icon: Lightbulb },
                  { name: 'Food', value: results.food, icon: Utensils },
                  { name: 'Water', value: results.water, icon: Droplets },
                  { name: 'Waste', value: results.waste, icon: Home }
                ].map((item) => {
                  const percentage = (item.value / results.total) * 100;
                  return (
                    <div key={item.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4 text-muted-foreground" />
                          {item.name}
                        </div>
                        <span className="font-semibold">{item.value.toFixed(1)} kg</span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  );
                })}
              </div>

              {/* Offset Recommendation */}
              <div className="p-4 bg-gradient-to-r from-success/10 to-primary/10 rounded-xl">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <TreePine className="h-4 w-4 text-success" />
                  To Offset Your Footprint
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Plant <span className="font-bold text-success">{treesToOffset} trees</span> per year
                  or reduce your daily emissions by making eco-friendly choices!
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Use public transport: Save 0.13 kg CO₂/km</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Switch to LED bulbs: Save 0.5 kg CO₂/day</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>Reduce meat intake: Save 2.5 kg CO₂/day</span>
                  </div>
                </div>
              </div>

              <Button className="btn-eco w-full">
                Start Reducing My Footprint
              </Button>
            </div>
          ) : (
            <div className="text-center py-12">
              <Calculator className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-muted-foreground mb-2">
                Calculate Your Impact
              </h4>
              <p className="text-sm text-muted-foreground">
                Fill in your daily habits to see your carbon footprint and learn how to reduce it.
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default CarbonCalculator;