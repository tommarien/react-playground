import { ReactNode, useState } from 'react';
import classNames from 'classnames';
import { Variant } from './Bootstrap';

export type AlertProps = {
  children: ReactNode;
  dismissible?: boolean;
  heading?: string;
  variant: Variant;
};

const ALERT_ROOT = 'alert';

function Alert({
  children,
  dismissible,
  heading,
  variant,
}: AlertProps): JSX.Element {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div
      className={classNames(ALERT_ROOT, `${ALERT_ROOT}-${variant}`, {
        [`${ALERT_ROOT}-dismissible`]: dismissible,
      })}
      style={{ display: dismissed ? 'none' : undefined }}
      role="alert"
    >
      {heading && <h4 className={`${ALERT_ROOT}-heading`}>{heading}</h4>}
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
