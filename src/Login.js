import person from './assets/imgs/person.png'
import './assets/css/login/login.css'
import './assets/css/styles.css'
import { useState } from 'react';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              Seja Bem Vindo
            </span>
              <div className='login-form-img'>
                <img src={person} alt="usuário" />
              </div>

              <div className="wrap-input">
                <input
                   type="email" 
                   className={email !== "" ? 'has-val input': 'input'} 
                   value={email} 
                   onChange={ e => setEmail(e.target.value) }
                />
                <span className='focus-input' data-placeholder='E-mail'></span>
              </div>

              <div className="wrap-input">
                <input 
                  type="password" 
                  className={password !== "" ? 'has-val input' : 'input'}
                  value={password} 
                  onChange={ e => setPassword(e.target.value)}
                />
                <span className='focus-input' data-placeholder='Password'></span>
              </div>

              <div className="container-login-form-btn">
                <button className='login-form-btn'>Login</button>
              </div>

              <div className="text-center">
                <span className='txt1'>Não possui conta?</span>
                <a href="#" className="txt2">Criar conta</a>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
