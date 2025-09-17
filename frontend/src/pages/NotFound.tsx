import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 animate-slide-up">
        <div className="text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          404
        </div>
        <h1 className="text-2xl font-bold text-foreground">Page Not Found</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-300 shadow-glow font-medium"
        >
          Return to Prepare
        </a>
      </div>
    </div>
  );
};

export default NotFound;
