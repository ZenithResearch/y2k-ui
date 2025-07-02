# Contributing to Y2K Tech UI

Thank you for your interest in contributing to Y2K Tech UI! This document provides guidelines and information for contributors.

## 🎨 Design Philosophy

Y2K Tech UI is inspired by the translucent, futuristic aesthetic of early 2000s technology, particularly portable stereo systems. When contributing, please keep these principles in mind:

- **Translucent Materials**: Use glass morphism effects and transparent elements
- **Chrome & Metallic Surfaces**: Incorporate gradient-based metallic effects
- **Electric Blue Palette**: Maintain the electric blue and cyan color scheme
- **Futuristic Typography**: Use Orbitron for displays and JetBrains Mono for digital elements
- **Tactile Interactions**: Create components that feel physical and interactive
- **Nostalgic Innovation**: Balance retro aesthetics with modern functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm 7+
- Basic knowledge of React, TypeScript, and Tailwind CSS
- Familiarity with the Y2K aesthetic

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/y2k-tech-ui.git
   cd y2k-tech-ui
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open Storybook for component development:
   ```bash
   npm run storybook
   ```

## 📁 Project Structure

```
├── components/
│   ├── ui/                 # Base UI components (shadcn/ui)
│   ├── BrandKit.tsx       # Y2K brand showcase component
│   ├── StereoPlayer.tsx   # Interactive stereo player
│   └── ...                # Other Y2K components
├── styles/
│   └── globals.css        # Y2K design system and utilities
├── stories/               # Storybook stories
├── tests/                 # Test files
└── index.ts              # Main export file
```

## 🎨 Component Guidelines

### Creating New Components

1. **Follow Y2K Aesthetics**: Use the established color palette and effects
2. **TypeScript First**: All components should be fully typed
3. **Accessibility**: Build on Radix UI primitives when possible
4. **Responsive Design**: Ensure components work on all screen sizes
5. **Documentation**: Include Storybook stories and JSDoc comments

### Example Component Structure

```tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../ui/utils';

const y2kButtonVariants = cva(
  "inline-flex items-center justify-center transition-all font-medium",
  {
    variants: {
      variant: {
        chrome: "button-3d text-y2k-dark-chrome hover:text-y2k-electric-blue",
        glass: "glass-card text-y2k-electric-blue hover:glow-blue",
        glow: "bg-y2k-electric-blue text-white glow-blue",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "chrome",
      size: "default",
    },
  }
);

export interface Y2KButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof y2kButtonVariants> {}

/**
 * Y2K-styled button component with chrome and glass effects
 */
export const Y2KButton = React.forwardRef<HTMLButtonElement, Y2KButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(y2kButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Y2KButton.displayName = "Y2KButton";
```

### Styling Guidelines

- Use the predefined CSS custom properties for colors
- Leverage utility classes like `.glass-card`, `.chrome-surface`, `.glow-blue`
- Follow the established font hierarchy (Orbitron for displays, Inter for body, JetBrains Mono for code)
- Maintain consistent spacing using Tailwind's spacing scale

## 🧪 Testing

### Unit Tests

Write tests for all components using Jest and React Testing Library:

```tsx
import { render, screen } from '@testing-library/react';
import { Y2KButton } from '../Y2KButton';

describe('Y2KButton', () => {
  it('renders with chrome variant by default', () => {
    render(<Y2KButton>Test Button</Y2KButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button-3d');
  });

  it('applies glow effect when variant is glow', () => {
    render(<Y2KButton variant="glow">Glow Button</Y2KButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('glow-blue');
  });
});
```

### Visual Testing

Create Storybook stories for visual testing:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Y2KButton } from './Y2KButton';

const meta: Meta<typeof Y2KButton> = {
  title: 'Y2K/Button',
  component: Y2KButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Chrome: Story = {
  args: {
    variant: 'chrome',
    children: 'Chrome Button',
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    children: 'Glass Button',
  },
};

export const Glow: Story = {
  args: {
    variant: 'glow',
    children: 'Glow Button',
  },
};
```

## 📝 Documentation

### Component Documentation

- Use JSDoc comments for all public APIs
- Include usage examples in component comments
- Document props with clear descriptions
- Add @example tags with code snippets

### README Updates

When adding new components or features:
1. Update the main README.md
2. Add usage examples
3. Update the component list
4. Include any new installation requirements

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Clear Description**: What went wrong?
2. **Steps to Reproduce**: How can we reproduce the issue?
3. **Expected Behavior**: What should have happened?
4. **Screenshots**: Visual proof of the issue
5. **Environment**: Browser, OS, Node.js version
6. **Code Example**: Minimal reproduction case

Use the bug report template:

```markdown
## Bug Description
Brief description of the bug

## Steps to Reproduce
1. Go to...
2. Click on...
3. See error

## Expected Behavior
What should happen

## Screenshots
If applicable, add screenshots

## Environment
- OS: [e.g. macOS]
- Browser: [e.g. Chrome 91]
- Y2K UI Version: [e.g. 1.0.0]
```

## ✨ Feature Requests

For new features, please:

1. Check existing issues first
2. Describe the problem you're solving
3. Propose your solution
4. Consider Y2K aesthetic alignment
5. Provide mockups or examples if possible

## 🔄 Pull Request Process

1. **Fork & Branch**: Create a feature branch from `main`
2. **Develop**: Make your changes following the guidelines
3. **Test**: Add tests and ensure all tests pass
4. **Document**: Update documentation and Storybook stories
5. **Lint**: Run `npm run lint:fix` to fix code style issues
6. **Commit**: Use conventional commit messages
7. **Pull Request**: Create a PR with a clear description

### Commit Message Format

Use conventional commits:

```
feat: add new Y2K slider component
fix: resolve chrome surface gradient rendering
docs: update component usage examples
style: improve glass card blur effect
test: add unit tests for stereo player
```

### PR Checklist

- [ ] Code follows the project's style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated and passing
- [ ] Documentation updated
- [ ] Storybook stories created/updated
- [ ] No breaking changes (or clearly documented)
- [ ] Follows Y2K design principles

## 🎨 Design Assets

If you're contributing visual assets or mockups:

1. Use the established color palette
2. Follow Y2K aesthetic principles
3. Provide assets in multiple formats (SVG preferred)
4. Include source files when possible
5. Ensure proper licensing/attribution

## 🤝 Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. Please:

- Be respectful and constructive
- Focus on the technical aspects
- Help others learn and grow
- Celebrate our shared love of Y2K aesthetics

## 📞 Getting Help

- **GitHub Discussions**: For general questions and ideas
- **GitHub Issues**: For bugs and feature requests
- **Storybook**: For component examples and documentation

Thank you for contributing to Y2K Tech UI! Together we're bringing the future-past aesthetic to the modern web. 🎛️✨