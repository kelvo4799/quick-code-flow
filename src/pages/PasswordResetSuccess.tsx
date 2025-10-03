import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { CheckCircle, ArrowRight } from "lucide-react";

const PasswordResetSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-border/50 shadow-glow-primary">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center shadow-glow-accent animate-glow-pulse">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">Password Reset Successful!</CardTitle>
            <CardDescription className="text-muted-foreground">
              Your password has been successfully reset
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="bg-accent/50 border border-border/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">
                You can now sign in to your account using your new password.
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow-primary"
              asChild
            >
              <Link to="/login">
                Sign In Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;
