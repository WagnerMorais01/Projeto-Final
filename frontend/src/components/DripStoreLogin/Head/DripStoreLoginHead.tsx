import classes from './DripStoreLoginHead.module.css'
import { DripStoreLoginLogo } from './DripStoreLoginLogo.js'

export const DripStoreLoginHead = function () {
  return (
    <div className={classes.DripStoreLoginHead}>
      <div className={classes.DripStoreLoginHeadContainer}>
        <div className={classes.DripStoreLoginHeadWrapper}>
          <div className={classes.DripStoreLoginHeadBrand}>
            <div className={classes.DripStoreLoginHeadLogo}>
              <DripStoreLoginLogo className={classes.DripStoreLoginHeadIcon} />
            </div>
            <div className={classes.DripStoreLoginHeadCompany}>Digital Store</div>
          </div>
        </div>
      </div>
    </div>
  )
}
