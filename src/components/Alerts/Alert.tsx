import React, { ReactNode } from 'react';
import classNames from 'classnames';

export type AlertProps = {
  children: ReactNode;
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

const BS_PREFIX = 'alert';

function Alert({ children, variant }: AlertProps): JSX.Element {
  return (
    <div
      role="alert"
      className={classNames(BS_PREFIX, `${BS_PREFIX}-${variant}`)}
    >
      {children}
    </div>
  );
}

export default Alert;
