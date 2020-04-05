import React from 'react';
import {
  render as renderRtl,
  RenderResult,
  within,
  screen,
} from '@testing-library/react';
import Alert, { AlertProps } from './Alert';

describe('Alert', () => {
  function render(props: Partial<AlertProps> = {}): RenderResult {
    const { children, heading, variant = 'primary' } = props;

    return renderRtl(
      <Alert heading={heading} variant={variant}>
        {children}
      </Alert>
    );
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

    const heading = within(alert).queryByRole('heading');
    expect(heading).not.toBeInTheDocument();
  });

  test('it renders the heading if given', () => {
    const heading = 'Well Done!';

    render({ heading });

    const alert = screen.getByRole('alert');

    const header = within(alert).getByRole('heading');
    expect(header).toHaveProperty('tagName', 'H4');
    expect(header).toHaveClass('alert-heading');
    expect(header).toHaveTextContent(heading);
  });
});
