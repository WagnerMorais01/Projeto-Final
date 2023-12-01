import { memo } from 'react';
import type { FC } from 'react';

import classes from './DripStoreLogin.module.css';
import { DripStoreLoginHead } from './Head/DripStoreLoginHead';
import { DripStoreLoginFooter } from './Footer/DripStoreLoginFooter';
import { DripStoreLoginMain } from './Main/DripStoreLoginMain';

interface Props {
}

export const DripStoreLogin: FC<Props> = memo(function DripStoreLogin(props = {}) {
  return (
    <div className={classes.root}>
      <DripStoreLoginHead/>
      <DripStoreLoginMain/>
      <DripStoreLoginFooter/>
    </div>
  );
});
