import React from 'react';
import { render as renderRtl, RenderResult } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

describe('Button', () => {
  function render({
    type = 'submit',
  }: Partial<ButtonProps> = {}): RenderResult {
    return renderRtl(<Button type={type}>Push me</Button>);
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
});
