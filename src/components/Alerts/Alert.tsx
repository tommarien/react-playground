import React, { ReactNode } from 'react';

export type AlertProps = {
  children: ReactNode;
  heading?: string;
  variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
};

const BS_ROOT = 'alert';

function Alert({ children, variant, heading }: AlertProps): JSX.Element {
  return (
    <div role="alert" className={`${BS_ROOT} ${BS_ROOT}-${variant}`}>
      {heading && <h4 className={`${BS_ROOT}-heading`}>{heading}</h4>}
      {children}
    </div>
  );
}

export default Alert;
