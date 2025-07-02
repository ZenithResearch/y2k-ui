import React from 'react';
import { BrandKit, StereoPlayer, Card, CardContent, CardHeader, CardTitle, Badge } from '../index';

// This is the demo app - not part of the npm package
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="container mx-auto px-4 py-8 space-y-12">
        
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Badge variant="secondary" className="mb-2">Brand Inspiration</Badge>
                  <h1 className="text-4xl lg:text-5xl bg-gradient-to-r from-y2k-electric-blue to-y2k-cyan bg-clip-text text-transparent">
                    Y2K Tech Aesthetic
                  </h1>
                  <p className="text-lg text-y2k-silver leading-relaxed">
                    A component library inspired by the translucent, futuristic design of early 2000s portable stereo systems
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Translucent Materials</Badge>
                  <Badge variant="outline">Chrome Accents</Badge>
                  <Badge variant="outline">Electric Blues</Badge>
                  <Badge variant="outline">Glass Morphism</Badge>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-y2k-electric-blue/20 to-y2k-cyan/20 rounded-2xl transform rotate-3 glow-blue"></div>
                <Card className="glass-card relative transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <CardContent className="p-4">
                    <div className="w-full h-48 bg-gradient-to-br from-y2k-electric-blue/20 to-y2k-cyan/20 rounded-lg flex items-center justify-center">
                      <span className="text-y2k-electric-blue font-display text-lg">Y2K STEREO SYSTEM</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stereo Player */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl bg-gradient-to-r from-y2k-electric-blue to-y2k-cyan bg-clip-text text-transparent">
              Interactive Experience
            </h2>
            <p className="text-y2k-silver">Experience the Y2K aesthetic through an interactive stereo player</p>
          </div>
          <StereoPlayer />
        </div>

        {/* Brand Kit Documentation */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl bg-gradient-to-r from-y2k-electric-blue to-y2k-cyan bg-clip-text text-transparent">
              Complete Brand Kit
            </h2>
            <p className="text-y2k-silver">Comprehensive design system with colors, typography, and components</p>
          </div>
          <BrandKit />
        </div>

        {/* Design Principles */}
        <Card className="glass-card max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl bg-gradient-to-r from-y2k-electric-blue to-y2k-cyan bg-clip-text text-transparent">
              Design Principles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Visual Elements</h3>
                <ul className="space-y-2 text-y2k-silver">
                  <li>• Translucent materials with glass morphism effects</li>
                  <li>• Chrome and metallic surface treatments</li>
                  <li>• Electric blue and cyan color palette</li>
                  <li>• Rounded, organic shapes with geometric precision</li>
                  <li>• Tactile button designs with 3D depth</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Brand Personality</h3>
                <ul className="space-y-2 text-y2k-silver">
                  <li>• Futuristic yet nostalgic</li>
                  <li>• Tech-forward and innovative</li>
                  <li>• Playful and approachable</li>
                  <li>• Premium but accessible</li>
                  <li>• Optimistic about technology</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-y2k-silver">
            Y2K Tech UI Component Library • NPM Package Demo
          </p>
        </div>
      </div>
    </div>
  );
}