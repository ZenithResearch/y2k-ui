import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Copy, Palette, Type, Layers, Zap } from 'lucide-react';

export function BrandKit() {
  const [copiedColor, setCopiedColor] = useState('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(label);
    setTimeout(() => setCopiedColor(''), 2000);
  };

  const colorPalette = [
    { name: 'Electric Blue', value: '#0066ff', css: '--y2k-electric-blue', usage: 'Primary actions, links' },
    { name: 'Cyan', value: '#00ccff', css: '--y2k-cyan', usage: 'Highlights, accents' },
    { name: 'Chrome', value: '#c0c8d8', css: '--y2k-chrome', usage: 'Metallic surfaces' },
    { name: 'Silver', value: '#8892a6', css: '--y2k-silver', usage: 'Secondary text' },
    { name: 'Dark Chrome', value: '#4a5568', css: '--y2k-dark-chrome', usage: 'Dark metallic elements' },
    { name: 'Translucent Blue', value: 'rgba(0, 102, 255, 0.15)', css: '--y2k-translucent-blue', usage: 'Glass overlays' },
    { name: 'Glass Blue', value: 'rgba(0, 204, 255, 0.08)', css: '--y2k-glass-blue', usage: 'Subtle glass effects' },
    { name: 'Glow', value: 'rgba(0, 204, 255, 0.3)', css: '--y2k-glow', usage: 'Shadow and glow effects' }
  ];

  const typography = [
    { level: 'Display', size: '2rem', weight: '600', font: 'Orbitron', usage: 'Hero headings, brand names', className: 'font-display font-semibold' },
    { level: 'Heading 1', size: '1.5rem', weight: '500', font: 'Orbitron', usage: 'Page titles', className: 'font-display font-medium' },
    { level: 'Heading 2', size: '1.25rem', weight: '500', font: 'Orbitron', usage: 'Section headings', className: 'font-display font-medium' },
    { level: 'Heading 3', size: '1.125rem', weight: '500', font: 'Inter', usage: 'Subsection headings', className: 'font-medium' },
    { level: 'Body', size: '1rem', weight: '400', font: 'Inter', usage: 'Main content, descriptions', className: 'font-normal' },
    { level: 'Caption', size: '0.875rem', weight: '400', font: 'Inter', usage: 'Metadata, labels', className: 'font-normal' },
    { level: 'Code/Digital', size: '0.875rem', weight: '500', font: 'JetBrains Mono', usage: 'Digital displays, code', className: 'font-mono font-medium text-digital' }
  ];

  const fontShowcase = [
    { name: 'Orbitron', description: 'Futuristic display font for headings and tech branding', className: 'font-display text-2xl', sample: 'TECHNO FUTURE 2024' },
    { name: 'Inter', description: 'Clean, readable font for body text and UI elements', className: 'text-lg', sample: 'Clean interface typography' },
    { name: 'JetBrains Mono', description: 'Monospace font for digital displays and code', className: 'font-mono text-lg text-digital', sample: '98.5 FM • 12:34:56' }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-y2k-electric-blue/5 to-y2k-cyan/5"></div>
          <div className="relative">
            <h1 className="text-4xl mb-4 bg-gradient-to-r from-y2k-electric-blue to-y2k-cyan bg-clip-text text-transparent font-display">
              Y2K TECH BRAND KIT
            </h1>
            <p className="text-y2k-silver text-lg">
              Inspired by translucent early 2000s technology aesthetics
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid w-full grid-cols-6 glass-card">
          <TabsTrigger value="colors" className="flex items-center gap-2 text-xs">
            <Palette className="w-4 h-4" />
            Colors
          </TabsTrigger>
          <TabsTrigger value="typography" className="flex items-center gap-2 text-xs">
            <Type className="w-4 h-4" />
            Typography
          </TabsTrigger>
          <TabsTrigger value="fonts" className="flex items-center gap-2 text-xs">
            <Type className="w-4 h-4" />
            Fonts
          </TabsTrigger>
          <TabsTrigger value="components" className="flex items-center gap-2 text-xs">
            <Layers className="w-4 h-4" />
            Components
          </TabsTrigger>
          <TabsTrigger value="effects" className="flex items-center gap-2 text-xs">
            <Zap className="w-4 h-4" />
            Effects
          </TabsTrigger>
          <TabsTrigger value="examples" className="flex items-center gap-2 text-xs">
            <Copy className="w-4 h-4" />
            Examples
          </TabsTrigger>
        </TabsList>

        {/* Colors Tab */}
        <TabsContent value="colors">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="font-display">Color Palette</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {colorPalette.map((color) => (
                  <div key={color.name} className="space-y-3">
                    <div 
                      className="h-20 rounded-lg border cursor-pointer transition-transform hover:scale-105"
                      style={{ backgroundColor: color.value }}
                      onClick={() => copyToClipboard(color.value, color.name)}
                    />
                    <div className="space-y-1">
                      <h4 className="font-medium">{color.name}</h4>
                      <p className="text-sm text-y2k-silver">{color.usage}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <code className="bg-y2k-glass-blue px-2 py-1 rounded font-mono">
                          {color.value}
                        </code>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => copyToClipboard(color.css, color.name)}
                          className="h-6 px-2"
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                      {copiedColor === color.name && (
                        <Badge variant="secondary" className="text-xs">Copied!</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Typography Tab */}
        <TabsContent value="typography">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="font-display">Typography System</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {typography.map((type) => (
                <div key={type.level} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`${type.className}`} style={{ fontSize: type.size }}>
                      {type.level} Sample Text
                    </span>
                    <Badge variant="outline" className="font-mono text-xs">
                      {type.size} • {type.font} {type.weight}
                    </Badge>
                  </div>
                  <p className="text-sm text-y2k-silver">{type.usage}</p>
                  <Separator />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Fonts Tab */}
        <TabsContent value="fonts">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="font-display">Font Collection</CardTitle>
              <p className="text-y2k-silver">Curated fonts that enhance the Y2K tech aesthetic</p>
            </CardHeader>
            <CardContent className="space-y-8">
              {fontShowcase.map((font) => (
                <div key={font.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-medium">{font.name}</h3>
                    <Badge variant="outline">Google Fonts</Badge>
                  </div>
                  <div className={`p-6 glass-card rounded-lg ${font.className}`}>
                    {font.sample}
                  </div>
                  <p className="text-sm text-y2k-silver">{font.description}</p>
                  <Separator />
                </div>
              ))}
              
              <div className="bg-y2k-glass-blue p-4 rounded-lg">
                <h4 className="font-medium mb-2">Installation</h4>
                <p className="text-sm text-y2k-silver mb-3">
                  The fonts are automatically loaded via Google Fonts. No additional installation required.
                </p>
                <code className="bg-black/20 p-2 rounded text-xs font-mono block">
                  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Orbitron:wght@400;500;700;900&display=swap');
                </code>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="font-display">Buttons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button className="w-full glow-blue font-medium">Primary Button</Button>
                  <Button variant="secondary" className="w-full">Secondary Button</Button>
                  <Button variant="outline" className="w-full">Outline Button</Button>
                  <button className="w-full px-4 py-2 rounded-lg button-3d text-y2k-dark-chrome font-medium text-tech">
                    CHROME BUTTON
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="font-display">Cards &amp; Surfaces</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="glass-card p-4 rounded-lg">
                  <h4 className="font-display">Glass Card</h4>
                  <p className="text-sm text-y2k-silver">Translucent background with blur</p>
                </div>
                <div className="chrome-surface p-4 rounded-lg">
                  <h4 className="font-display">Chrome Surface</h4>
                  <p className="text-sm text-y2k-dark-chrome">Metallic gradient surface</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Effects Tab */}
        <TabsContent value="effects">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="font-display">Visual Effects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-display">Glass Morphism</h4>
                  <div className="glass-card p-4 rounded-lg">
                    <p className="text-sm font-mono">backdrop-filter: blur(12px)</p>
                    <p className="text-sm font-mono">background: rgba(255,255,255,0.1)</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-display">Blue Glow</h4>
                  <div className="bg-y2k-electric-blue/10 p-4 rounded-lg glow-blue">
                    <p className="text-sm font-mono">box-shadow: 0 0 20px cyan</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-display">Chrome Gradient</h4>
                  <div className="chrome-surface p-4 rounded-lg">
                    <p className="text-sm text-y2k-dark-chrome font-mono">Metallic surface effect</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Examples Tab */}
        <TabsContent value="examples">
          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="font-display">Brand Application Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Logo Example */}
                  <div className="glass-card p-6 rounded-xl space-y-4">
                    <div className="flex items-center justify-center h-24 bg-gradient-to-br from-y2k-electric-blue to-y2k-cyan rounded-lg">
                      <span className="text-white text-2xl font-display font-bold tracking-wider">TECHNO</span>
                    </div>
                    <p className="text-center text-sm text-y2k-silver">Logo with brand gradient</p>
                  </div>

                  {/* Interface Example */}
                  <div className="glass-card p-6 rounded-xl space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-y2k-electric-blue rounded-full glow-blue"></div>
                        <span className="font-medium">User Interface</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-y2k-translucent-blue rounded-full">
                          <div className="h-2 bg-gradient-to-r from-y2k-electric-blue to-y2k-cyan rounded-full w-3/4"></div>
                        </div>
                        <div className="flex gap-2">
                          <div className="button-3d px-3 py-1 rounded text-sm text-tech">PLAY</div>
                          <div className="button-3d px-3 py-1 rounded text-sm text-tech">STOP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}