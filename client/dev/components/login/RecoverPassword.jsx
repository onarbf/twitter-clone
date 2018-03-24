import React from 'react';

export default ({changeInput,sendForm, inputs, changeTo})=>{
  return(
    <div className= "box flex HAlign column">
      <div className="box-title">
        <h4>Recuperar Constraseña</h4>
        <hr/>
      </div>
        <form className="column">
          <input type="text" onChange={changeInput} className="input-text" name="inputRecoverPasswordEmail" placeholder="email"/>
          <div className="flex HRight">
            <button className="button" onClick={sendForm}>Enviar</button>
          </div>
          <div className="form-text">
            <p>No tengo cuenta<a name="2" onClick={changeTo}> Crear aquí.</a></p>
          </div>
        </form>
    </div>

  )
}
