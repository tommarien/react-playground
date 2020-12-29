// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '../components/Button';

export default {
  title: 'Playground/Button',
  component: Button,
  args: {
    type: 'button',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
  variant: 'primary',
  disabled: false,
};

export const AccessibleClose = Template.bind({});
AccessibleClose.args = {
  children: <span aria-hidden="true">&times;</span>,
  variant: 'light',
  'aria-label': 'Close',
};
