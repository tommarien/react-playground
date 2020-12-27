/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import { Variant } from './Bootstrap';

export type ButtonProps = Pick<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'onClick' | 'disabled' | 'children' | 'aria-label'
> & {
  type: 'button' | 'submit' | 'reset';
  variant: Variant | 'link';
};

const BS_ROOT = 'btn';

function Button(props: ButtonProps): JSX.Element {
  const {
    'aria-label': ariaLabel,
    children,
    disabled,
    onClick,
    type,
    variant,
  } = props;

  return (
    <button
      aria-label={ariaLabel}
      className={classNames(BS_ROOT, `${BS_ROOT}-${variant}`)}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
