import classes from './DripStoreLoginFooter.module.css'
import { DripStoreLoginFooterLogo } from './DripStoreLoginFooterLogo.js'
import { DripStoreLoginFooterSeparatorIcon } from './DripStoreLoginFooterSeparatorIcon.js'

export const DripStoreLoginFooter = function () {
  return (
    <div className={classes.DripStoreLoginFooter}>
      <div className={classes.DripStoreLoginFooterContainer}>
        <div className={classes.DripStoreLoginFooterRow}>
          <div className={classes.DripStoreLoginFooterBrandColumn}>
            <div className={classes.DripStoreLoginFooterBrand}>
              <div className={classes.DripStoreLoginFooterLogo}>
                <DripStoreLoginFooterLogo className={classes.DripStoreLoginFooterIcon} />
              </div>
              <div className={classes.DripStoreLoginFooterCompany}>Digital Store</div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore.
            </p>
          </div>

          <div className={classes.DripStoreLoginFooterInformationColumn}>
            <h4>Informação</h4>
            <h5>Sobre Drip Store</h5>
            <h5>Segurança</h5>
            <h5>Wishlist</h5>
            <h5>Blog</h5>
            <h5>Meus Pedidos</h5>
            <h5>Trabalhe Conosco</h5>
          </div>

          <div className={classes.DripStoreLoginFooterCategoryColumn}>
            <h4>Categorias</h4>
            <h5>Camisetas</h5>
            <h5>Calças</h5>
            <h5>Bones</h5>
            <h5>Headphones</h5>
            <h5>Tênis</h5>
          </div>

          <div className={classes.DripStoreLoginFooterContactColumn}>
            <h4>Contato</h4>
            <p>Av. Santos Dumont,1510 - 1 andar - Aldeota, Fortaleza-CE, 60150-161</p>
            <p>(85) 3051-3411</p>
          </div>
        </div>

        <div className={classes.DripStoreLoginFooterRow}>
          <DripStoreLoginFooterSeparatorIcon className={classes.DripStoreLoginFooterSeparator} />
        </div>

        <div className={classes.DripStoreLoginFooterRow}>
          <div className={classes.DripStoreLoginFooterCopyright}>@ 2022 Digital College</div>
        </div>
      </div>
    </div>
  )
}
