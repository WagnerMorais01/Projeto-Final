import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/General/Buttons/_resets.module.css';
import { DripStoreLogin } from './components/DripStoreLogin/DripStoreLogin';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <DripStoreLogin />
    </div>
  );
});
