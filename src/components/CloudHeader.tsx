import React from 'react';
import { Cloud, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CloudHeader = () => {
  return (
    <header className="w-full border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Cloud className="w-8 h-8 text-primary" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                CloudDrive
              </h1>
              <p className="text-xs text-muted-foreground">
                Secure file storage
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-hero">
              Upgrade
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CloudHeader;