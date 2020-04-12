/* eslint-disable react/button-has-type */
import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { BSVariant } from './constants';

export type ButtonProps = Pick<
  React.HTMLAttributes<HTMLButtonElement>,
  'onClick'
> & {
  type: 'button' | 'submit' | 'reset';
  variant: BSVariant | 'link';
  children: ReactNode;
};

const BS_ROOT = 'btn';

function Button(props: ButtonProps): JSX.Element | null {
  const { children, onClick, type, variant } = props;

  return (
    <button
      className={classNames(BS_ROOT, `${BS_ROOT}-${variant}`)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
