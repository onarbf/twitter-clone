import React from 'react';

export default ({changeInput,sendForm, inputs, changeTo})=>{
  return(
    <div className= "box flex HAlign column">
      <div className="box-title">
        <h4>Formulario</h4>
        <hr/>
      </div>
        <form className="column">
          <input onChange={changeInput} type="text" name="inputSigninUsername" className="input-text" placeholder="username"/>
          <input type="text" onChange={changeInput} className="input-text" name="inputSigninEmail" placeholder="email"/>
          <input type="password" onChange={changeInput} className="input-text" name="inputSigninPassword" placeholder="password"/>
          <input type="password" onChange={changeInput} className="input-text" name="inputSigninPassword2" placeholder="repeat password"/>
          <div className="flex HRight">
            <button className="button" onClick={sendForm}>Enviar</button>
          </div>
          <div className="form-text">
            <p>Tengo ya una cuenta.  <a name="1" onClick={changeTo}> Acceder aquí.</a></p>
          </div>
        </form>
    </div>

  )
}
