import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, Scale, Clock, Users, BookOpen, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/hero-lawyer.jpg";
import scalesImage from "@/assets/scales-justice.png";

const LawyerOfOne = () => {
  const [formData, setFormData] = useState({
    name: "",
    barNumber: "",
    practiceArea: "",
    caseLoad: "",
    challenge: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-legal-green"
          style={{
            backgroundImage: `url(${scalesImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            backgroundSize: "40% auto",
            backgroundBlendMode: "overlay"
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Their Case. Their Future. 
                <span className="block text-accent">Their Hope.</span>
                <span className="block text-3xl lg:text-4xl mt-4 font-medium">
                  All Resting on Your Shoulders Alone.
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                You became a lawyer to fight for justice, but you're drowning in paperwork 
                while opposing counsel has teams.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-lg italic text-accent font-medium">
                  "When did fighting for justice become a battle for survival?"
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Solo lawyer working late in law library"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Agitate Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Solo Practice Trap That's 
              <span className="text-primary"> Killing Your Career</span>
            </h2>
            <div className="bg-accent/10 rounded-lg p-6 border-l-4 border-accent">
              <p className="text-lg text-muted-foreground">
                <span className="font-bold text-foreground">Lawyers rank #1 in loneliness</span> among all professions - let that sink in
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                text: "Opposing counsel has 5 attorneys while you're handling discovery alone at 11 PM"
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                text: "Complex legal research that should take hours stretches into sleepless nights"
              },
              {
                icon: <Scale className="w-8 h-8 text-primary" />,
                text: "Your clients deserve better, but you're one person trying to be an entire law firm"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-primary" />,
                text: "Every case feels like you're flying blind because there's no senior partner to ask"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                      {item.icon}
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      "{item.text}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              <span className="font-bold text-foreground">Statistical reality:</span> "61% of lawyers score above average on loneliness measures. 
              <span className="text-primary font-semibold"> You're not alone in feeling alone.</span>"
            </p>
          </div>
        </div>
      </section>

      {/* Professional Isolation Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The Weight of Being the 
              <span className="text-accent"> Only One Who Can Help</span>
            </h2>
            <p className="text-xl text-white/90">
              The unique burden of solo legal practice:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              "Client calls at 8 PM because you're their only hope and they're terrified",
              "Making legal strategy decisions that will change someone's life forever with no one to consult",
              "Court deadlines that only you know about, only you can meet",
              "The responsibility of being someone's last line of defense against injustice"
            ].map((text, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-accent/20 p-2 rounded-full">
                    <AlertTriangle className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-lg leading-relaxed">
                    "{text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-8 mt-12 max-w-3xl mx-auto border border-accent/30">
            <p className="text-xl font-medium text-center">
              <span className="text-accent font-bold">Mirror moment:</span> "Look at your desk right now. 
              How many client files are there? Each one represents someone counting on you alone."
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Level the Playing Field. 
              <span className="text-legal-green"> Fight Like You Have a Team.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Legal Research AI",
                description: "Find relevant cases and precedents instantly"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Document Review AI",
                description: "Spot issues and inconsistencies in contracts and filings"
              },
              {
                icon: <Scale className="w-8 h-8" />,
                title: "Brief Writing AI",
                description: "Draft compelling arguments with proper citations"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Client Management AI",
                description: "Never miss a deadline or client communication again"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-muted/50">
                <CardContent className="p-0">
                  <div className="text-center space-y-4">
                    <div className="bg-legal-green text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg">"{feature.description}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-legal-green max-w-3xl mx-auto">
              "Give your clients the representation they deserve. Give yourself the backup you need."
            </p>
          </div>
        </div>
      </section>

      {/* Conversion Form Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-legal-green text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Reclaim Your Evening Practice.
              </h2>
              <h3 className="text-2xl lg:text-3xl font-semibold text-accent mb-6">
                Serve Justice Better.
              </h3>
              <p className="text-xl text-white/90">
                Legal strategy consultation with someone who understands the weight you carry alone
              </p>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      How should we address you in court?
                    </Label>
                    <Input
                      id="name"
                      placeholder="Attorney Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12 text-lg"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="barNumber" className="text-foreground font-medium">
                      Bar Number (for verification and confidentiality)
                    </Label>
                    <Input
                      id="barNumber"
                      placeholder="State Bar Number"
                      value={formData.barNumber}
                      onChange={(e) => setFormData({...formData, barNumber: e.target.value})}
                      className="h-12 text-lg"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="practiceArea" className="text-foreground font-medium">
                      Practice Area
                    </Label>
                    <Select 
                      value={formData.practiceArea} 
                      onValueChange={(value) => setFormData({...formData, practiceArea: value})}
                    >
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Select your specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="criminal">Criminal Defense</SelectItem>
                        <SelectItem value="family">Family Law</SelectItem>
                        <SelectItem value="personal-injury">Personal Injury</SelectItem>
                        <SelectItem value="business">Business Law</SelectItem>
                        <SelectItem value="estate">Estate Planning</SelectItem>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="immigration">Immigration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="caseLoad" className="text-foreground font-medium">
                      How many active cases are you handling solo?
                    </Label>
                    <Select 
                      value={formData.caseLoad} 
                      onValueChange={(value) => setFormData({...formData, caseLoad: value})}
                    >
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Select case load" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 cases</SelectItem>
                        <SelectItem value="11-25">11-25 cases</SelectItem>
                        <SelectItem value="26-50">26-50 cases</SelectItem>
                        <SelectItem value="50+">50+ cases</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-foreground font-medium">
                      What's your biggest challenge?
                    </Label>
                    <RadioGroup 
                      value={formData.challenge}
                      onValueChange={(value) => setFormData({...formData, challenge: value})}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="research" id="research" />
                        <Label htmlFor="research" className="text-sm cursor-pointer flex-1">
                          Too much time on research, not enough on strategy
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="document-review" id="document-review" />
                        <Label htmlFor="document-review" className="text-sm cursor-pointer flex-1">
                          Document review eating into client relationship time
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="outgunned" id="outgunned" />
                        <Label htmlFor="outgunned" className="text-sm cursor-pointer flex-1">
                          Feeling outgunned by firms with larger teams
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="admin" id="admin" />
                        <Label htmlFor="admin" className="text-sm cursor-pointer flex-1">
                          Administrative work preventing me from practicing law
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button 
                    type="submit" 
                    variant="legal" 
                    size="lg" 
                    className="w-full h-14 text-lg font-semibold"
                  >
                    Schedule My Legal Strategy Session
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      🔒 Protected by attorney-client privilege
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LawyerOfOne;