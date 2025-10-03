import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Mail, CheckCircle, RefreshCw } from "lucide-react";

const EmailVerification = () => {
  const navigate = useNavigate();
  const [isResending, setIsResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleResend = async () => {
    setIsResending(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsResending(false);
    setResendSuccess(true);
    setTimeout(() => setResendSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-border/50 shadow-glow-primary">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-primary animate-glow-pulse">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">Verify Your Email</CardTitle>
            <CardDescription className="text-muted-foreground">
              We've sent a verification link to your email address
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="bg-accent/50 border border-border/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Please check your inbox and click the verification link to activate your account.
              </p>
              <p className="text-xs text-muted-foreground">
                Don't forget to check your spam folder if you don't see the email.
              </p>
            </div>

            {resendSuccess && (
              <div className="flex items-center gap-2 bg-gradient-accent/20 border border-primary/20 rounded-lg p-3 text-sm">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-foreground">Verification email sent successfully!</span>
              </div>
            )}

            <div className="flex items-center justify-center space-x-4 pt-4">
              <Button
                variant="outline"
                onClick={handleResend}
                disabled={isResending}
                className="w-full"
              >
                {isResending ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Resend Email
                  </>
                )}
              </Button>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              Already verified?{" "}
              <Link to="/login" className="text-primary hover:text-primary/80 transition-colors">
                Sign in here
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default EmailVerification;
