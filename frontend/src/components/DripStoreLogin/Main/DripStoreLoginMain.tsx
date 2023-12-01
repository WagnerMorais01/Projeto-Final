import classes from './DripStoreLoginMain.module.css';
import { Facebook } from '../../General/Icons/Facebook/Facebook';
import { Gmail } from '../../General/Icons/Gmail/Gmail';
import { PrimaryButton } from '../../General/Buttons/PrimaryButton';
import { useState } from 'react';

interface Props {
  className?: string;
}

export const DripStoreLoginMain = function () {
  const [username, setUsername] = useState('wilcorrea');
  const [password, setPassword] = useState('aq1sw2de3');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const requestSignIn = async () => {
    try {
      const response = await fetch(
        'http://localhost:5174/api/v1/login',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ username, password })
        }
      );
      const data = await response.json();

      setError(!response.ok);
      setMessage(data.message);

    } catch (exception) {
      setError(true);
      if (typeof exception === 'string') {
        setMessage(exception);
      } else if (exception instanceof Error) {
        setMessage(exception.message);
      }
    }
  }

  return (
    <div className={classes.DripStoreLoginMain}>

      <div className={classes.DripStoreLoginMainContainer}>

        <div className={classes.DripStoreLoginMainForm}>
          <div className={classes.DripStoreLoginMainFormWrapper}>
            <div className={classes.DripStoreLoginMainFormTitle}>
              <div className={classes.DripStoreLoginMainFormTitleCaption}>Acesse sua conta</div>
              <div className={classes.DripStoreLoginMainFormTitleSignUp}>
                <p>
                  Novo cliente? Então registre-se <a href="">aqui</a>.
                </p>
              </div>
            </div>

            <div className={classes.DripStoreLoginMainFormBody}>
              <label>Login *</label>
              <div>
                <input
                  type="text"
                  placeholder="Insira seu login ou email"
                  onChange={(event) => setUsername(event.target.value)}
                  value={username}
                />
              </div>
              <label>Senha *</label>
              <div>
                <input
                  type="text"
                  placeholder="Insira sua senha"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
              </div>
            </div>

            <div className={classes.DripStoreLoginMainFormRemember}>Esqueci minha senha</div>

            <div className={classes.DripStoreLoginMainFormSignIn}>
              <PrimaryButton
                label="Acessar Conta"
                onClick={requestSignIn}
              />
            </div>

            {error && (
              <div className={classes.DripStoreLoginMainFormError}>{message}</div>
            )}

            <div className={classes.DripStoreLoginMainFormBottom}>
              <span>Ou faça login com</span>
              <div className={classes.DripStoreLoginMainFormBottomIcons}>
                <Facebook />
                <Gmail />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.DripStoreLoginMainShoes}>
          <img
            src="/assets/shoes.png"
            alt="shoes"
          />
        </div>

      </div>

    </div>
  )
}
