import type { FC } from 'react'
import { memo } from 'react'
import classes from './PrimaryButton.module.css'

interface Props {
  label: string;
  onClick?: () => any;
}

export const PrimaryButton: FC<Props> = memo(function (props) {
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
})
