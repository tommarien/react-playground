// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Badge, { BadgeProps } from '../components/Badge';

export default {
  title: 'Playground/Badge',
  component: Badge,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Badge',
  variant: 'primary',
};

export const Pill = Template.bind({});
Pill.args = {
  children: 'Pill',
  variant: 'secondary',
  pill: true,
};
