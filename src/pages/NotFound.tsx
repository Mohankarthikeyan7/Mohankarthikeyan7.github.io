
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-devops-navy mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8 text-center">Oops! The page you're looking for doesn't exist.</p>
      
      <Button asChild className="bg-devops-teal hover:bg-devops-teal/90">
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
