import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="p-2 bg-gradient-primary rounded-lg shadow-glow-primary group-hover:shadow-glow-accent transition-all duration-300">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            SMSVerify
          </span>
        </Link>
        
        <div className="flex items-center space-x-4">
          {location.pathname === "/login" ? (
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground text-sm">New here?</span>
              <Button variant="outline" asChild>
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          ) : location.pathname === "/register" ? (
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground text-sm">Have an account?</span>
              <Button variant="outline" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="outline" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;