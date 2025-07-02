// Y2K Tech Component Library
// Main entry point for npm package

// Core Y2K Components
export { BrandKit } from './components/BrandKit';
export { StereoPlayer } from './components/StereoPlayer';

// Essential UI components for convenience
export { Button } from './components/ui/button';
export { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
export { Badge } from './components/ui/badge';
export { Separator } from './components/ui/separator';
export { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
export { Slider } from './components/ui/slider';

// Complete UI component exports for advanced users
export * from './components/ui/accordion';
export * from './components/ui/alert-dialog';
export * from './components/ui/alert';
export * from './components/ui/aspect-ratio';
export * from './components/ui/avatar';
export * from './components/ui/breadcrumb';
export * from './components/ui/calendar';
export * from './components/ui/carousel';
export * from './components/ui/chart';
export * from './components/ui/checkbox';
export * from './components/ui/collapsible';
export * from './components/ui/command';
export * from './components/ui/context-menu';
export * from './components/ui/dialog';
export * from './components/ui/drawer';
export * from './components/ui/dropdown-menu';
export * from './components/ui/form';
export * from './components/ui/hover-card';
export * from './components/ui/input-otp';
export * from './components/ui/input';
export * from './components/ui/label';
export * from './components/ui/menubar';
export * from './components/ui/navigation-menu';
export * from './components/ui/pagination';
export * from './components/ui/popover';
export * from './components/ui/progress';
export * from './components/ui/radio-group';
export * from './components/ui/resizable';
export * from './components/ui/scroll-area';
export * from './components/ui/select';
export * from './components/ui/sheet';
export * from './components/ui/sidebar';
export * from './components/ui/skeleton';
export * from './components/ui/slider';
export * from './components/ui/sonner';
export * from './components/ui/switch';
export * from './components/ui/table';
export * from './components/ui/textarea';
export * from './components/ui/toggle-group';
export * from './components/ui/toggle';
export * from './components/ui/tooltip';

// Utility exports
export * from './components/ui/utils';
export { useIsMobile } from './components/ui/use-mobile';

// Type definitions for Y2K theme
export interface Y2KColors {
  electricBlue: string;
  cyan: string;
  translucentBlue: string;
  glassBlue: string;
  chrome: string;
  silver: string;
  darkChrome: string;
  glow: string;
}

export interface Y2KTheme {
  colors: Y2KColors;
  fonts: {
    primary: string;
    display: string;
    mono: string;
  };
  effects: {
    glassCard: string;
    chromeSurface: string;
    glowBlue: string;
    button3d: string;
  };
}

// Default Y2K theme configuration
export const y2kTheme: Y2KTheme = {
  colors: {
    electricBlue: '#0066ff',
    cyan: '#00ccff',
    translucentBlue: 'rgba(0, 102, 255, 0.15)',
    glassBlue: 'rgba(0, 204, 255, 0.08)',
    chrome: '#c0c8d8',
    silver: '#8892a6',
    darkChrome: '#4a5568',
    glow: 'rgba(0, 204, 255, 0.3)'
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    display: "'Orbitron', 'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', 'Consolas', 'Monaco', monospace"
  },
  effects: {
    glassCard: 'glass-card',
    chromeSurface: 'chrome-surface',
    glowBlue: 'glow-blue',
    button3d: 'button-3d'
  }
};

// CSS utility class names for easy reference
export const y2kClasses = {
  glassCard: 'glass-card',
  chromeSurface: 'chrome-surface',
  glowBlue: 'glow-blue',
  button3d: 'button-3d',
  fontDisplay: 'font-display',
  textTech: 'text-tech',
  textDigital: 'text-digital'
} as const;