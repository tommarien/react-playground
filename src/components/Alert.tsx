import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';

export type AlertProps = {
  children: ReactNode;
  dismissible?: boolean;
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

function Alert({
  children,
  dismissible,
  heading,
  variant,
}: AlertProps): JSX.Element {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div
      className={classNames(BS_ROOT, `${BS_ROOT}-${variant}`, {
        [`${BS_ROOT}-dismissible`]: dismissible,
      })}
      style={{ display: dismissed ? 'none' : undefined }}
      role="alert"
    >
      {heading && <h4 className={`${BS_ROOT}-heading`}>{heading}</h4>}
      {children}
      {dismissible && (
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => setDismissed(true)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
}

export default Alert;
