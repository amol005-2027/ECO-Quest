import { useState } from 'react';
import { MessageCircle, X, Send, Headphones } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const EcoChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m EcoBot, your environmental learning assistant. How may I help you today? 🌱',
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    'How to reduce carbon footprint?',
    'Best recycling practices?',
    'Water conservation tips?',
    'How to earn more eco-points?'
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userText: string): string => {
    const text = userText.toLowerCase();
    
    if (text.includes('carbon') || text.includes('footprint')) {
      return 'Great question! To reduce your carbon footprint: 🌍\n• Walk, cycle, or use public transport\n• Turn off lights when not needed\n• Plant trees and join green activities\n• Recycle and reuse items\n\nEach small action counts! You can track your progress in our Carbon Calculator section.';
    }
    
    if (text.includes('recycle') || text.includes('recycling')) {
      return 'Recycling is super important! Here are the best practices: ♻️\n• Separate waste into different categories\n• Clean containers before recycling\n• Learn your local recycling rules\n• Reduce and reuse before recycling\n\nDon\'t forget to share your recycling activities for peer validation points!';
    }
    
    if (text.includes('water') || text.includes('conservation')) {
      return 'Water conservation tips: 💧\n• Turn off taps while brushing teeth\n• Take shorter showers\n• Fix leaky faucets immediately\n• Collect rainwater for plants\n• Use water-efficient appliances\n\nTrack your water-saving actions in the Carbon Calculator!';
    }
    
    if (text.includes('points') || text.includes('coins')) {
      return 'Want to earn more eco-points and coins? Here\'s how: 🏆\n• Complete daily eco-actions\n• Participate in learning modules\n• Share eco-activities with photos\n• Join school competitions\n• Maintain your daily streak\n\nCheck the Store section to spend your eco-coins on cool rewards!';
    }
    
    if (text.includes('tree') || text.includes('plant')) {
      return 'Tree planting is amazing! 🌳\n• Choose native species for your area\n• Plant during monsoon season\n• Water regularly in first year\n• Protect from animals with guards\n• Join community plantation drives\n\nUpload photos of your tree planting for bonus points!';
    }
    
    return 'That\'s an interesting question! 🤔 I\'m here to help with environmental topics like:\n• Carbon footprint reduction\n• Recycling and waste management\n• Water and energy conservation\n• Eco-friendly practices\n• Earning points and rewards\n\nFeel free to ask about any green topic or check our Learning Modules for detailed guides!';
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        size="icon"
      >
        <div className="flex items-center justify-center">
          <Headphones className="h-6 w-6 text-white" />
        </div>
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 h-96 bg-card/95 backdrop-blur-sm border shadow-2xl z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <Headphones className="h-5 w-5" />
          <span className="font-semibold">EcoBot Assistant</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white/20 h-8 w-8 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-muted text-foreground'
                    : 'bg-gradient-to-r from-primary to-primary-glow text-primary-foreground'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Quick Questions */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
          <div className="grid grid-cols-1 gap-1">
            {quickQuestions.slice(0, 2).map((question, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="text-xs h-6 justify-start p-2 hover:bg-muted/50"
                onClick={() => handleSendMessage(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Ask about eco-friendly practices..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage(inputValue);
              }
            }}
            className="flex-1 h-9"
          />
          <Button
            size="sm"
            onClick={() => handleSendMessage(inputValue)}
            className="h-9 w-9 p-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default EcoChatbot;