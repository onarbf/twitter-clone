import  React from 'react';
import {Grid} from 'semantic-ui-react';

import Toolbar from '../components/Toolbar.jsx';

export default class Login extends React.Component{

  changeInput(e,inputType){
    e.preventDefault();
    console.log('inputType', inputType);
  }

  render(){

    return(
      <div className="login">

        <div className="row">
          <div className="col-xs-12 col-md-6">

            <div className="flex expand VAlign HAlign">
              <div >
                <img src="./images/login-1.png" />
              </div>
            </div>

          </div>
          <div className="col-xs-12 col-md-6">

            <div className="login_right expand">
              <div className="row">
                <div className= "col-xs-12 col-md-8 flex  VAlign HAlign">
                  <div className= "box flex HAlign column">
                    <div className="box-title">
                      <h4>Formulario</h4>
                      <hr/>
                    </div>
                      <form className="column">
                        <input onChange={this.changeInput} type="text" class="input-text" placeholder="username"/>
                        <input type="text" class="input-text" placeholder="email"/>
                        <input type="password" class="input-text" placeholder="password"/>
                        <input type="password" class="input-text" placeholder="repeat password"/>
                        <div className="flex HRight">
                          <button className="button">Enviar</button>
                        </div>
                        <div className="form-text">
                          <p>Tengo ya una cuenta.  <a href="#"> Acceder aquí.</a></p>
                        </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

}
