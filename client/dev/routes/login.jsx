import  React from 'react';
import {graphql} from 'react-apollo';
import gpl from 'graphql-tag';

import Signin from '../components/login/Signin.jsx';
import Login from '../components/login/Login.jsx';
import RecoverPassword from '../components/login/RecoverPassword.jsx';

import Toolbar from '../components/Toolbar.jsx';

class Logins extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props;
    this.state = {
      inputs: {
        inputSigninUsername:'',
        inputSigninEmail:'',
        inputSigninPassword:'',
        inputSigninPassword2:'',
        inputLoginUsername:'',
        inputLoginPassword:'',
        inputRecoverPasswordEmail:'',
      },
      renders : [
        true,
        false,
        false
      ]
    }
  }

  changeInput = (e)=>{
    e.preventDefault();
    const inputs = this.state.inputs;
    inputs[e.target.name] = e.target.value;

    this.setState({inputs: inputs})
    console.log('inputs',this.state.inputs);
  }

  sendForm =async (e)=>{
    e.preventDefault();
    let variables = {
      username: this.state.inputs.inputSigninUsername,
      email: this.state.inputs.inputSigninEmail,
      password: this.state.inputs.inputSigninPassword
    }
    console.log('Form Sended', variables);
    console.log('mutation', this.props.mutate);
    const response = await this.props.mutate({
      variables : variables
    })

    console.log('Graphql response', response);
  };

  changeTo = (e)=>{
    e.preventDefault();
    var renders = this.state.renders;

    renders = renders.map((el)=>{return false});
    renders[e.target.name] = true;

    this.setState({renders: renders})
  }

  render(){

    return(
      <div className="login">

        <div className="row">
          <div className="col-xs-12 col-md-6 ">

            <div className="flex expand VAlign HAlign">
              <div>
                <img src="./images/login-1.png" />
              </div>
            </div>

          </div>
          <div className="col-xs-12 col-md-6 first-xs last-md">

            <div className="login_right expand">
              <div className="row">
                <div className= "col-xs-12 col-md-8 flex  VAlign HAlign">
                  {this.state.renders[0] && <Signin sendForm={this.sendForm} changeTo={this.changeTo}  changeInput={this.changeInput} inputs={this.state.inputs} />}
                  {this.state.renders[1] && <Login sendForm={this.sendForm} changeTo={this.changeTo}  changeInput={this.changeInput} inputs={this.state.inputs} />}
                  {this.state.renders[2] && <RecoverPassword sendForm={this.sendForm} changeTo={this.changeTo}  changeInput={this.changeInput} inputs={this.state.inputs} />}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    )
  }

}

const mutation = gpl`
    mutation($username:String!, $password: String!, $email: String! ){
      addUser(username: $username, password: $password, email: $email )
    }
`

export default graphql(mutation)(Logins);
