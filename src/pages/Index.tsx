import React from 'react';
import CloudHeader from '@/components/CloudHeader';
import FileUpload from '@/components/FileUpload';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CloudHeader />
      
      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Your Files,
                </span>
                <br />
                <span className="text-foreground">
                  Anywhere, Anytime
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Upload, store, and access your files securely in the cloud. 
                Experience seamless file management with our modern interface.
              </p>
            </div>
          </div>

          {/* Upload Component */}
          <FileUpload />
          
          {/* Features Grid */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-gradient-upload rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Upload files at incredible speeds with our optimized infrastructure.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-gradient-upload rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold">Secure Storage</h3>
              <p className="text-muted-foreground">
                Your files are encrypted and stored with enterprise-grade security.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-gradient-upload rounded-xl flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold">Global Access</h3>
              <p className="text-muted-foreground">
                Access your files from anywhere in the world, on any device.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
