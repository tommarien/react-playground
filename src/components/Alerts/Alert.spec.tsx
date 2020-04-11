import React from 'react';
import {
  render as renderRtl,
  RenderResult,
  within,
  screen,
  fireEvent,
} from '@testing-library/react';
import Alert, { AlertProps } from './Alert';

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
    const { container } = render({
      variant: 'secondary',
      children: <div data-testid="child" />,
    });

    const alert = container.firstElementChild as HTMLElement;

    expect(alert).toHaveProperty('tagName', 'DIV');
    expect(alert).toHaveAttribute('role', 'alert');
    expect(alert).toHaveClass('alert', 'alert-secondary');

    expect(alert).not.toHaveClass('alert-dismissible');
    expect(alert).toBeVisible();

    within(alert).getByTestId('child');

    const dismissButton = within(alert).queryByRole('button');
    expect(dismissButton).not.toBeInTheDocument();
  });

  describe('heading', () => {
    test('it renders the alert with the header if supplied', () => {
      const heading = 'Well Done!';

      render({ heading });

      const alert = screen.getByRole('alert');

      const header = within(alert).getByRole('heading');
      expect(header).toHaveProperty('tagName', 'H4');
      expect(header).toHaveClass('alert-heading');
      expect(header).toHaveTextContent(heading);
    });

    test('guard it does not render a heading if not supplied', () => {
      render();

      const alert = screen.getByRole('alert');

      const heading = within(alert).queryByRole('heading');
      expect(heading).not.toBeInTheDocument();
    });
  });

  test('it can render dismissible', () => {
    render({ dismissible: true });

    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('alert-dismissible');

    const button = within(alert).getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Close');
    expect(button).toHaveClass('close');
    expect(button).toHaveTextContent(/\u00D7/);

    fireEvent.click(button);

    expect(alert).not.toBeVisible();
  });
});
