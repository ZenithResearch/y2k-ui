import type { Meta, StoryObj } from '@storybook/react';
import { BrandKit } from '../components/BrandKit';

const meta: Meta<typeof BrandKit> = {
  title: 'Y2K/BrandKit',
  component: BrandKit,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive showcase of the Y2K design system including colors, typography, components, and visual effects. Inspired by translucent early 2000s technology aesthetics.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The complete Y2K brand kit with all design system elements including color palette, typography, components, and interactive examples.',
      },
    },
  },
};

export const ColorsOnly: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Focus on the Y2K color palette showcasing electric blues, chrome effects, and translucent materials.',
      },
    },
  },
  render: () => (
    <div className="p-8">
      <div className="grid grid-cols-4 gap-4 max-w-4xl">
        <div className="space-y-2">
          <div className="h-20 bg-y2k-electric-blue rounded-lg"></div>
          <p className="text-sm font-medium">Electric Blue</p>
          <code className="text-xs">#0066ff</code>
        </div>
        <div className="space-y-2">
          <div className="h-20 bg-y2k-cyan rounded-lg"></div>
          <p className="text-sm font-medium">Cyan</p>
          <code className="text-xs">#00ccff</code>
        </div>
        <div className="space-y-2">
          <div className="h-20 bg-y2k-chrome rounded-lg"></div>
          <p className="text-sm font-medium">Chrome</p>
          <code className="text-xs">#c0c8d8</code>
        </div>
        <div className="space-y-2">
          <div className="h-20 bg-y2k-silver rounded-lg"></div>
          <p className="text-sm font-medium">Silver</p>
          <code className="text-xs">#8892a6</code>
        </div>
      </div>
    </div>
  ),
};

export const EffectsShowcase: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of Y2K visual effects including glass morphism, chrome surfaces, and glow effects.',
      },
    },
  },
  render: () => (
    <div className="p-8 space-y-6">
      <div className="grid grid-cols-3 gap-6 max-w-4xl">
        <div className="glass-card p-6 rounded-xl">
          <h3 className="font-display mb-2">Glass Morphism</h3>
          <p className="text-sm text-y2k-silver">Translucent card with backdrop blur</p>
        </div>
        <div className="chrome-surface p-6 rounded-xl">
          <h3 className="font-display mb-2">Chrome Surface</h3>
          <p className="text-sm text-y2k-dark-chrome">Metallic gradient effect</p>
        </div>
        <div className="bg-y2k-electric-blue/10 p-6 rounded-xl glow-blue">
          <h3 className="font-display mb-2">Glow Effect</h3>
          <p className="text-sm text-y2k-electric-blue">Electric blue glow</p>
        </div>
      </div>
    </div>
  ),
};