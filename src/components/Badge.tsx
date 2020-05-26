import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Variant } from './Bootstrap';

const defaultProps = {
  pill: false,
};

export type BadgeProps = {
  children: ReactNode;
  variant: Variant;
} & typeof defaultProps;

const BS_ROOT = 'badge';

function Badge({ children, variant, pill }: BadgeProps): JSX.Element {
  return (
    <span
      className={classNames(BS_ROOT, `${BS_ROOT}-${variant}`, {
        [`${BS_ROOT}-pill`]: pill,
      })}
    >
      {children}
    </span>
  );
}

Badge.defaultProps = defaultProps;

export default Badge;
