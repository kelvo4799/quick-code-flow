import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Shield, Zap, Lock, CheckCircle, ArrowRight, MessageSquare, Users, BarChart3 } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Send SMS verification codes in under 1 second worldwide"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% delivery guarantee"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics Dashboard",
      description: "Track delivery rates, conversion metrics, and user engagement"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Global Coverage",
      description: "Reach users in 200+ countries with local number support"
    }
  ];

  const benefits = [
    "Easy API integration in minutes",
    "Competitive pricing starting at $0.01/SMS",
    "24/7 technical support",
    "Custom sender IDs available",
    "Fraud detection & prevention",
    "Developer-friendly documentation"
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center bg-gradient-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <MessageSquare className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by 10,000+ developers</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                SMS Verification
              </span>
              <br />
              Made Simple
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Secure your applications with fast, reliable SMS verification codes. 
              Simple API, global reach, enterprise security.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow-primary animate-glow-pulse"
              asChild
            >
              <Link to="/register">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="border-border/50 bg-background/50">
              View Documentation
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-primary/20 rounded-2xl p-8 border border-primary/20 backdrop-blur-sm">
              <div className="bg-background/90 rounded-lg p-6 font-mono text-left">
                <div className="text-sm text-muted-foreground mb-2">// Send verification code</div>
                <div className="text-foreground">
                  <span className="text-blue-400">await</span>{" "}
                  <span className="text-green-400">smsVerify</span>
                  <span className="text-yellow-400">.send</span>
                  <span className="text-foreground">({"{"}phone: </span>
                  <span className="text-orange-400">"+1234567890"</span>
                  <span className="text-foreground">{"}"});</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">SMSVerify</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to implement secure SMS verification in your applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow-accent transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Everything You Need</h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-8">
            <div className="text-center">
              <Shield className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-bold mb-2">Enterprise Ready</h4>
              <p className="text-muted-foreground mb-6">
                SOC 2 compliant, GDPR ready, with enterprise SLAs and dedicated support.
              </p>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-primary/10 border-primary/20 backdrop-blur-sm">
          <CardContent className="text-center py-16">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust SMSVerify for their authentication needs.
              Start with 100 free SMS credits.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow-primary"
              asChild
            >
              <Link to="/register">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;