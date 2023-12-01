import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../Buttons/_resets.module.css';
import classes from './Facebook.module.css';
import { VectorIcon2 } from './ImageLogo';
import { VectorIcon } from './ImageBody';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 476:2899 */
export const Facebook: FC<Props> = memo(function FacebookOriginal(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon2} />
      </div>
    </div>
  );
});
