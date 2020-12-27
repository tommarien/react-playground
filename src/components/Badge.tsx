import { ReactNode } from 'react';
import classNames from 'classnames';
import { Variant } from './Bootstrap';

export type BadgeProps = {
  children: ReactNode;
  variant: Variant;
  pill?: boolean;
};

const BS_ROOT = 'badge';

function Badge({ children, variant, pill = false }: BadgeProps): JSX.Element {
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

export default Badge;
