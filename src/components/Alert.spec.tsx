import React from 'react';
import {
  render as renderRtl,
  RenderResult,
  within,
  fireEvent,
} from '@testing-library/react';
import Alert, { AlertProps } from './Alert';
import { Variant } from './Bootstrap';

describe('Alert', () => {
  function render(props: Partial<AlertProps> = {}): RenderResult {
    const { children, heading, variant = 'primary', dismissible } = props;

    return renderRtl(
      <Alert heading={heading} dismissible={dismissible} variant={variant}>
        {children}
      </Alert>
    );
  }

  test('it renders by default', () => {
    const view = render({
      children: <div data-testid="child" />,
    });

    const alert = view.getByRole('alert');

    expect(alert).toHaveProperty('tagName', 'DIV');
    expect(alert).toHaveClass('alert', 'alert-primary');

    expect(alert).toBeVisible();
    expect(alert).not.toHaveClass('alert-dismissible');

    const dismissButton = within(alert).queryByRole('button');
    expect(dismissButton).not.toBeInTheDocument();

    within(alert).getByTestId('child');
  });

  describe('variant', () => {
    test.each([
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ])('it renders in variant %s', (variant) => {
      const { getByRole } = render({ variant: variant as Variant });

      const alert = getByRole('alert');
      expect(alert).toHaveClass('alert', `alert-${variant}`);
    });
  });

  describe('heading', () => {
    test('it renders the alert with the header if supplied', () => {
      const heading = 'Well Done!';

      const view = render({ heading });

      const alert = view.getByRole('alert');

      const header = within(alert).getByRole('heading');
      expect(header).toHaveProperty('tagName', 'H4');
      expect(header).toHaveClass('alert-heading');
      expect(header).toHaveTextContent(heading);
    });

    test('guard it does not render a heading if not supplied', () => {
      const view = render();

      const alert = view.getByRole('alert');

      const heading = within(alert).queryByRole('heading');
      expect(heading).not.toBeInTheDocument();
    });
  });

  describe('dismissible', () => {
    test('it renders a dismissible alert', () => {
      const view = render({ dismissible: true });

      const alert = view.getByRole('alert');
      expect(alert).toHaveClass('alert-dismissible');

      const button = within(alert).getByLabelText('Close');
      expect(button).toHaveProperty('tagName', 'BUTTON');
      expect(button).toHaveClass('close');
      expect(button).toHaveTextContent(/\u00D7/);

      fireEvent.click(button);

      expect(alert).not.toBeVisible();
    });
  });
});
