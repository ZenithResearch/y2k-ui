## AnnouncementBanner

A configurable, copy-agnostic banner component with Y2K-styled background, chrome surface accents, and optional decorative elements.

### Import

```tsx
import { AnnouncementBanner } from "@y2k-tech/ui";
```

### Basic Usage

```tsx
<AnnouncementBanner
  variant="electric"
  badge="ALERT"
  title="Announcement"
  message="Details go here"
  animated
  dismissible
/>
```

### Props

- `className?: string`
- `title?: React.ReactNode`
- `message?: React.ReactNode`
- `badge?: React.ReactNode`
- `icon?: React.ReactNode`
- `action?: { label: React.ReactNode; onClick?: () => void; endIcon?: React.ReactNode; className?: string }`
- `onDismiss?: () => void`
- `variant?: 'default' | 'electric' | 'chrome' | 'glow'`
- `animated?: boolean`
- `dismissible?: boolean`
- `variantClassName?: string` Override/extend gradient + border classes
- `showBackground?: boolean`
- `gridSize?: number`
- `gridLineColor?: string`
- `orbs?: FloatingOrb[]` from `FloatingOrbs`
- `showFrame?: boolean`

### Composition & Primitives

This component composes the following UI primitives (also exported):

- `GridPattern`: gradient-based grid background
- `FloatingOrbs`: blurred gradient orbs
- `TechFrame`: bottom/side lines and corner accents

You can use these primitives directly to build custom banners or sections.

### Accessibility

- The banner content is standard HTML elements; provide meaningful `title`, `message`, and `action.label` text.
- `dismissible` adds a button with `aria-label="Dismiss"`.


