import React from 'react';

export default ({changeInput,sendForm, inputs, changeTo})=>{
  return(
    <div className= "box flex HAlign column">
      <div className="box-title">
        <h4>Log In</h4>
        <hr/>
      </div>
        <form className="column">
          <input onChange={changeInput} type="text" name="inputLoginUsername" className="input-text" placeholder="username"/>
          <input type="password" onChange={changeInput} className="input-text" name="inputLoginPassword" placeholder="password"/>
          <div className="flex HRight">
            <button className="button" onClick={sendForm}>Enviar</button>
          </div>
          <div className="form-text">
            <p>No tengo cuenta<a name="0" onClick={changeTo}> Crear aquí.</a></p>
          </div>
          <div className="form-text">
            <p>¿No recuerdas la contraseña?<a name="2" onClick={changeTo}> Haz click aquí.</a></p>
          </div>
        </form>
    </div>

  )
}
