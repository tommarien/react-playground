// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Component, { BadgeProps } from '../components/Badge';

export default {
  title: 'Playground/Badge',
  component: Component,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<BadgeProps> = (args) => <Component {...args} />;

export const Badge = Template.bind({});
Badge.args = {
  children: 'Badge',
  variant: 'primary',
};
