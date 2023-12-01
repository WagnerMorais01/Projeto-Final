import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../Buttons/_resets.module.css';
import classes from './Gmail.module.css';
import { GroupIcon } from './ImageLogo';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 476:2902 */
export const Gmail: FC<Props> = memo(function Gmail1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.group}>
        <GroupIcon className={classes.icon} />
      </div>
    </div>
  );
});
