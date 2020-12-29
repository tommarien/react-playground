// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Component, { AlertProps } from '../components/Alert';

export default {
  title: 'Playground/Alert',
  component: Component,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<AlertProps> = (args) => <Component {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  heading: 'Warning',
  children: (
    <>
      <strong>Holy guacamole!</strong>You should check in on some of those
      fields below.
    </>
  ),
  variant: 'warning',
  dismissible: true,
};
