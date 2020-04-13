/* eslint-disable react/button-has-type */
import React from 'react';
import classNames from 'classnames';
import { BSVariant } from './constants';

export type ButtonProps = Pick<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'onClick' | 'disabled' | 'children'
> & {
  type: 'button' | 'submit' | 'reset';
  variant: BSVariant | 'link';
};

const BS_ROOT = 'btn';

function Button(props: ButtonProps): JSX.Element | null {
  const { children, disabled, onClick, type, variant } = props;

  return (
    <button
      className={classNames(BS_ROOT, `${BS_ROOT}-${variant}`)}
      style={{ cursor: disabled ? 'not-allowed' : undefined }}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
