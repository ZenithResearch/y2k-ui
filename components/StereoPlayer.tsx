import React, { useState } from 'react';
import { Play, Pause, Square, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Slider } from './ui/slider';

export function StereoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [frequency, setFrequency] = useState([98.5]);

  const frequencyButtons = [
    { label: 'PRESET 1', freq: 95.5 },
    { label: 'PRESET 2', freq: 98.5 },
    { label: 'PRESET 3', freq: 101.1 },
    { label: 'PRESET 4', freq: 105.7 },
    { label: 'PRESET 5', freq: 107.9 },
    { label: 'PRESET 6', freq: 102.3 }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="glass-card p-8 rounded-3xl relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-y2k-electric-blue/5 via-transparent to-y2k-cyan/5 pointer-events-none"></div>
        
        {/* Main display area - inspired by the CD compartment */}
        <div className="relative mb-8">
          <div className="chrome-surface rounded-full p-6 mx-auto w-48 h-48 flex items-center justify-center relative">
            {/* CD-like center */}
            <div className="absolute inset-4 bg-gradient-to-br from-y2k-electric-blue/20 to-y2k-cyan/20 rounded-full glass-card">
              <div className="absolute inset-6 bg-gradient-to-br from-y2k-electric-blue to-y2k-cyan rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-y2k-chrome rounded-full"></div>
              </div>
            </div>
            {/* Display */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/90 text-y2k-cyan px-4 py-2 rounded font-mono text-lg tracking-wider text-digital border border-y2k-cyan/30">
              {frequency[0].toFixed(1)} FM
            </div>
          </div>
        </div>

        {/* Main controls */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="lg" 
            className="button-3d w-12 h-12 rounded-full p-0"
          >
            <SkipBack className="w-5 h-5 text-y2k-dark-chrome" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            className="button-3d w-16 h-16 rounded-full p-0 glow-blue"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-y2k-electric-blue" />
            ) : (
              <Play className="w-6 h-6 text-y2k-electric-blue" />
            )}
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            className="button-3d w-12 h-12 rounded-full p-0"
          >
            <Square className="w-4 h-4 text-y2k-dark-chrome" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            className="button-3d w-12 h-12 rounded-full p-0"
          >
            <SkipForward className="w-5 h-5 text-y2k-dark-chrome" />
          </Button>
        </div>

        {/* Preset buttons - inspired by the stereo's preset buttons */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {frequencyButtons.map((preset, index) => (
            <Button
              key={index}
              variant="ghost"
              className="button-3d h-10 text-xs font-medium text-y2k-dark-chrome hover:text-y2k-electric-blue transition-colors text-tech"
              onClick={() => setFrequency([preset.freq])}
            >
              {preset.label}
            </Button>
          ))}
        </div>

        {/* Function controls */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-y2k-silver font-display text-tech">FUNCTION</span>
            <span className="text-y2k-silver font-display text-tech">BAND</span>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="button-3d flex-1 text-xs text-y2k-dark-chrome text-tech">
                  CD
                </Button>
                <Button variant="ghost" size="sm" className="button-3d flex-1 text-xs text-y2k-dark-chrome text-tech">
                  RADIO
                </Button>
                <Button variant="ghost" size="sm" className="button-3d flex-1 text-xs text-y2k-dark-chrome text-tech">
                  TAPE
                </Button>
              </div>
            </div>
            
            <div className="flex-1 space-y-2">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="button-3d flex-1 text-xs text-y2k-dark-chrome text-tech">
                  FM
                </Button>
                <Button variant="ghost" size="sm" className="button-3d flex-1 text-xs text-y2k-dark-chrome text-tech">
                  AM
                </Button>
                <Button variant="ghost" size="sm" className="button-3d flex-1 text-xs text-y2k-dark-chrome text-tech">
                  SW
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Volume control */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <Volume2 className="w-4 h-4 text-y2k-silver" />
            <div className="flex-1">
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            <span className="text-sm text-y2k-silver font-mono text-digital min-w-[3ch]">{volume[0]}</span>
          </div>
        </div>

        {/* Digital status display */}
        <div className="mt-4 flex justify-center">
          <div className="bg-black/80 px-4 py-2 rounded border border-y2k-cyan/30">
            <div className="flex items-center gap-4 text-xs text-y2k-cyan font-mono text-digital">
              <span>{isPlaying ? '▶ PLAYING' : '⏸ PAUSED'}</span>
              <span>VOL: {volume[0]}</span>
              <span>{new Date().toLocaleTimeString('en-US', { hour12: false })}</span>
            </div>
          </div>
        </div>

        {/* Speaker grilles */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-32 chrome-surface rounded-r-lg opacity-50">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-y2k-silver/20 to-transparent"></div>
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-32 chrome-surface rounded-l-lg opacity-50">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-y2k-silver/20 to-transparent"></div>
        </div>
      </Card>
    </div>
  );
}