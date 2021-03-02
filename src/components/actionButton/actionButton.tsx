import React from 'react';

interface ActionButtonProps {
  value: string;
  classes: string;
  disabledCondition: boolean;
  withActions: boolean | undefined;
  handleClick(): void;
}
export const ActionButton = ({
  classes,
  disabledCondition,
  value,
  handleClick,
  withActions
}: ActionButtonProps) => {
  return withActions ? (
    <button className={classes} disabled={disabledCondition} onClick={handleClick}>
      {value}
    </button>
  ) : null;
};
