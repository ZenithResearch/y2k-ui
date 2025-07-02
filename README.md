# Y2K Tech UI 🎛️

A React component library inspired by the translucent, futuristic design of early 2000s portable stereo systems. Features glass morphism effects, chrome surfaces, electric blue accents, and nostalgic Y2K aesthetics.

![Y2K Tech UI Preview](https://img.shields.io/badge/Y2K-Tech%20UI-00ccff?style=for-the-badge&logo=react)

## ✨ Features

- 🎨 **Y2K Aesthetic**: Translucent materials, chrome effects, electric blues
- 🔮 **Glass Morphism**: Modern glassmorphism effects with backdrop blur
- 🎛️ **Interactive Components**: Stereo player, brand kit showcase, and more
- 🎯 **TypeScript**: Full TypeScript support with proper type definitions
- 🎨 **Tailwind CSS**: Built with Tailwind CSS v4 for easy customization
- 📱 **Responsive**: Mobile-first responsive design
- ♿ **Accessible**: Built on Radix UI primitives for accessibility
- 🎪 **Storybook**: Comprehensive component documentation

## 🚀 Installation

```bash
npm install @y2k-tech/ui
# or
yarn add @y2k-tech/ui
# or
pnpm add @y2k-tech/ui
```

### Prerequisites

This library requires:

- React 16.8+
- Tailwind CSS v4+
- The following fonts (automatically loaded):
  - Inter (body text)
  - Orbitron (display/headings)
  - JetBrains Mono (code/digital displays)

## 🎨 Setup

### 1. Import the CSS

Add the Y2K UI styles to your app:

```tsx
// In your main CSS file or _app.tsx
import "@y2k-tech/ui/styles";
```

### 2. Configure Tailwind CSS

Add the Y2K design tokens to your `tailwind.config.js`:

```js
/** @tailwind-config */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@y2k-tech/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'y2k-electric-blue': '#0066ff',
        'y2k-cyan': '#00ccff',
        'y2k-chrome': '#c0c8d8',
        'y2k-silver': '#8892a6',
        'y2k-dark-chrome': '#4a5568',
        'y2k-glow': 'rgba(0, 204, 255, 0.3)',
      },
      fontFamily: {
        'display': ['Orbitron', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
    },
  },
}
```

## 🎛️ Component Usage

### Individual Component Imports

Import only the components you need:

```tsx
import { BrandKit } from "@y2k-tech/ui";
import { StereoPlayer } from "@y2k-tech/ui";
import { Button, Card, Badge } from "@y2k-tech/ui";

function MyApp() {
  return (
    <div>
      <Button className="glow-blue">Y2K Button</Button>
      <StereoPlayer />
    </div>
  );
}
```

### Named Imports

```tsx
import {
  BrandKit,
  StereoPlayer,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  y2kTheme,
  y2kClasses,
} from "@y2k-tech/ui";
```

### BrandKit Component

A comprehensive showcase of the Y2K design system:

```tsx
import { BrandKit } from "@y2k-tech/ui";

function App() {
  return (
    <div className="p-8">
      <BrandKit />
    </div>
  );
}
```

### StereoPlayer Component

An interactive stereo player with Y2K aesthetics:

```tsx
import { StereoPlayer } from "@y2k-tech/ui";

function MusicApp() {
  return (
    <div className="p-8">
      <StereoPlayer />
    </div>
  );
}
```

### UI Components with Y2K Styling

All components come with built-in Y2K styling:

```tsx
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  useIsMobile,
} from "@y2k-tech/ui";

function Dashboard() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="font-display">
          Y2K Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button className="glow-blue">Primary Action</Button>
        <Badge variant="secondary">Status</Badge>
      </CardContent>
    </Card>
  );
}
```

## 🎨 Styling System

### CSS Classes

The library includes custom utility classes for Y2K effects:

```css
.glass-card       /* Glass morphism card effect */
.chrome-surface   /* Metallic chrome gradient */
.glow-blue        /* Electric blue glow effect */
.button-3d        /* 3D button with depth */
.font-display     /* Orbitron display font */
.text-tech        /* Uppercase tech text styling */
.text-digital     /* Monospace digital display text */
```

### Using Y2K Classes

```tsx
import { y2kClasses } from "@y2k-tech/ui";

function TechInterface() {
  return (
    <div className={y2kClasses.glassCard + " p-6 rounded-xl"}>
      <h1
        className={`${y2kClasses.fontDisplay} ${y2kClasses.textTech} text-2xl mb-4`}
      >
        SYSTEM STATUS
      </h1>
      <div
        className={y2kClasses.chromeSurface + " p-4 rounded-lg"}
      >
        <p className={y2kClasses.textDigital}>
          12:34:56 • ONLINE
        </p>
      </div>
      <button
        className={`${y2kClasses.button3d} ${y2kClasses.glowBlue} px-6 py-2 rounded-lg`}
      >
        ACTIVATE
      </button>
    </div>
  );
}
```

## 🎨 Theme Configuration

### Accessing Theme Values

```tsx
import { y2kTheme } from "@y2k-tech/ui";

// Access colors
const primaryColor = y2kTheme.colors.electricBlue; // '#0066ff'
const accentColor = y2kTheme.colors.cyan; // '#00ccff'

// Access fonts
const displayFont = y2kTheme.fonts.display; // 'Orbitron', 'Inter', ...
const monoFont = y2kTheme.fonts.mono; // 'JetBrains Mono', ...
```

### Color Palette

| Color         | Hex       | Usage                  |
| ------------- | --------- | ---------------------- |
| Electric Blue | `#0066ff` | Primary actions, links |
| Cyan          | `#00ccff` | Highlights, accents    |
| Chrome        | `#c0c8d8` | Metallic surfaces      |
| Silver        | `#8892a6` | Secondary text         |
| Dark Chrome   | `#4a5568` | Dark metallic elements |

## 🎯 TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import type { Y2KTheme, Y2KColors } from "@y2k-tech/ui";

interface AppProps {
  theme?: Y2KTheme;
  primaryColor?: keyof Y2KColors;
}

// Component props are fully typed
import { ButtonProps } from "@y2k-tech/ui";

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} className="glow-blue" />;
};
```

## 📦 What's Exported

### Core Components

- `BrandKit` - Complete design system showcase
- `StereoPlayer` - Interactive stereo interface

### UI Components

- All shadcn/ui components with Y2K styling
- `Button`, `Card`, `Badge`, `Tabs`, `Slider`, etc.

### Theme & Utilities

- `y2kTheme` - Theme configuration object
- `y2kClasses` - CSS class name constants
- Type definitions for all components

### CSS Styles

Import styles separately:

```tsx
import "@y2k-tech/ui/styles";
```

### Hooks

Utility hooks for responsive design:

```tsx
import { useIsMobile } from "@y2k-tech/ui";

function ResponsiveComponent() {
  const isMobile = useIsMobile();

  return (
    <div
      className={isMobile ? "mobile-layout" : "desktop-layout"}
    >
      {isMobile ? "Mobile View" : "Desktop View"}
    </div>
  );
}
```

## 📖 Storybook

View all components in Storybook:

```bash
npm run storybook
```

Visit `http://localhost:6006` to explore the component library.

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/y2k-tech/ui.git
cd ui

# Install dependencies
npm install

# Start development server
npm run dev

# Build the library
npm run build

# Run demo app
npm run demo
```

## 🎨 Customization

### Overriding Colors

```css
:root {
  --y2k-electric-blue: #0066ff;
  --y2k-cyan: #00ccff;
  --y2k-chrome: #c0c8d8;
  /* ... other Y2K variables */
}
```

### Component Variants

```tsx
<Button variant="default" className="glow-blue">
  Primary Button
</Button>

<Card className="glass-card chrome-border">
  <CardContent>Futuristic content</CardContent>
</Card>
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎵 Inspiration

This component library was inspired by the translucent blue stereo systems of the early 2000s, capturing the optimistic, tech-forward aesthetic of the Y2K era.

## 🧑‍💻 Next.js Usage

This library is fully compatible with Next.js (including the App Router and Pages Router). To use in your Next.js project:

1. **Install peer dependencies** (if not already present):
   ```bash
   npm install react react-dom next @radix-ui/react-* lucide-react cmdk embla-carousel-react input-otp next-themes react-day-picker react-hook-form react-resizable-panels recharts sonner vaul
   ```
   (You may only need a subset depending on which components you use.)

2. **Import styles in your custom `_app.tsx` or layout file:**
   ```tsx
   import "@y2k-tech/ui/styles";
   ```

3. **SSR/CSR Compatibility:**
   - All components are SSR-safe and support Next.js streaming.
   - For best results, use components inside a `"use client"` boundary if they use interactivity.

4. **Tailwind Setup:**
   - Ensure your `tailwind.config.js` includes the library in the `content` array (see above).

5. **Fonts:**
   - The library expects Inter, Orbitron, and JetBrains Mono fonts. You can use Next.js font optimization or import from Google Fonts.

6. **Tree-shaking:**
   - Only import the components you use for optimal bundle size.

---

Made with ❤️ and a healthy dose of Y2K nostalgia