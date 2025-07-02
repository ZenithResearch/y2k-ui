import type { Meta, StoryObj } from '@storybook/react';
import { StereoPlayer } from '../components/StereoPlayer';

const meta: Meta<typeof StereoPlayer> = {
  title: 'Y2K/StereoPlayer',
  component: StereoPlayer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An interactive stereo player component inspired by Y2K portable music devices. Features translucent materials, chrome buttons, and digital displays with authentic early 2000s aesthetics.',
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
        story: 'The complete stereo player with all controls, presets, and Y2K styling. Click play to see the interactive states.',
      },
    },
  },
};

export const Compact: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'A more compact version of the stereo player for smaller spaces.',
      },
    },
  },
  render: () => (
    <div className="scale-75">
      <StereoPlayer />
    </div>
  ),
};

export const Interactive: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Fully interactive stereo player with working controls. Try clicking the preset buttons and adjusting the volume.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    // Could add interactive testing here
  },
};