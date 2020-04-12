import React from 'react';
import {
  render as renderRtl,
  RenderResult,
  fireEvent,
} from '@testing-library/react';
import Button, { ButtonProps } from './Button';

describe('Button', () => {
  function render({
    type = 'submit',
    variant = 'primary',
    onClick = undefined,
  }: Partial<ButtonProps> = {}): RenderResult {
    return renderRtl(
      <Button onClick={onClick} type={type} variant={variant}>
        Push me
      </Button>
    );
  }

  test('it renders by default', () => {
    const { getByText } = render();

    const button = getByText('Push me');
    expect(button).toHaveProperty('tagName', 'BUTTON');

    expect(button).toHaveClass('btn', 'btn-primary');
  });

  describe('type', () => {
    test('it renders as a button', () => {
      const { getByRole } = render({ type: 'button' });

      const button = getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });

    test('it renders as a submit', () => {
      const { getByRole } = render({ type: 'submit' });

      const button = getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    test('it renders as a reset', () => {
      const { getByRole } = render({ type: 'reset' });

      const button = getByRole('button');
      expect(button).toHaveAttribute('type', 'reset');
    });
  });

  describe('variant', () => {
    test('it renders as a secondary button', () => {
      const { getByRole } = render({ variant: 'secondary' });

      const button = getByRole('button');
      expect(button).toHaveClass('btn', 'btn-secondary');
    });

    test('it renders as a link button', () => {
      const { getByRole } = render({ variant: 'link' });

      const button = getByRole('button');
      expect(button).toHaveClass('btn', 'btn-link');
    });
  });

  test('it passes the onClick handler', () => {
    // Because the event could be undefined, typescript wants us to add undefined
    let event: React.MouseEvent<HTMLButtonElement> | undefined;

    const onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      // Synthetic event
      e.persist();
      event = e;
    };

    const { getByRole } = render({ onClick });

    const button = getByRole('button');
    fireEvent.click(button);

    expect(event).toEqual(expect.objectContaining({ type: 'click' }));
  });
});
