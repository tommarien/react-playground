import React from 'react';
import {
  render as renderRtl,
  RenderResult,
  within,
} from '@testing-library/react';
import Alert, { AlertProps } from './Alert';

describe('Alert', () => {
  function render({
    children,
    variant = 'primary',
  }: Partial<AlertProps> = {}): RenderResult {
    return renderRtl(<Alert variant={variant}>{children}</Alert>);
  }

  test('it renders the alert', () => {
    const { container } = render({
      variant: 'secondary',
      children: <div data-testid="child" />,
    });

    const alert = container.firstElementChild as HTMLElement;

    expect(alert).toHaveProperty('tagName', 'DIV');
    expect(alert).toHaveAttribute('role', 'alert');
    expect(alert).toHaveClass('alert', 'alert-secondary');

    within(alert).getByTestId('child');
  });
});
