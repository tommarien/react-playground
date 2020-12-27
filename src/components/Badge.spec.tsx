import { render as renderRtl, RenderResult } from '@testing-library/react';
import Badge, { BadgeProps } from './Badge';

describe('Badge', () => {
  function render(props: Partial<BadgeProps> = {}): RenderResult {
    const { variant = 'primary', pill } = props;

    return renderRtl(
      <Badge variant={variant} pill={pill}>
        Content
      </Badge>
    );
  }

  test('it renders by default', () => {
    const view = render();

    const badge = view.getByText('Content');

    expect(badge).toHaveProperty('tagName', 'SPAN');
    expect(badge).toHaveClass('badge', 'badge-primary');

    expect(badge).not.toHaveClass('badge-pill');
  });

  test('it renders in another variant', () => {
    const view = render({ variant: 'secondary' });

    const badge = view.getByText('Content');
    expect(badge).toHaveClass('badge', 'badge-secondary');
  });

  test('it renders as a pill', () => {
    const view = render({ pill: true });

    const badge = view.getByText('Content');
    expect(badge).toHaveClass('badge-pill');
  });
});
