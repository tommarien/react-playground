/* eslint-disable react/button-has-type */
import React, { ReactNode } from 'react';
import classNames from 'classnames';

export type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  children: ReactNode;
};

const BS_ROOT = 'btn';

function Button(props: ButtonProps): JSX.Element | null {
  const { type, children } = props;

  return (
    <button className={classNames(BS_ROOT, `${BS_ROOT}-primary`)} type={type}>
      {children}
    </button>
  );
}

export default Button;
