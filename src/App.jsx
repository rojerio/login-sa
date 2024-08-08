import './App.css'

function App() {

  return (
    <>
    <header>
        <h1>Cadastro ADMIN</h1>
      <div className="back">
        <div className="aling">
          <div className="cadastro">
            <input type="text" placeholder='Gmail'/>
            <input type="text" placeholder='Senha'/>
            <input type="text" placeholder='Código de registro'/>
            <input type="text" placeholder='Telefone'/>
          </div>
          <p>politica de privacidade</p>
            <button>Entrar</button>
          <div className="img">
            <img className='mamaco' src="https://lh3.googleusercontent.com/chat_attachment/AP1Ws4t27Gen7s5h2K7le-UlJlTys66mnv9OkZPhwVWJfHWkp7SAh-k355Jma3z2QfJmTwNNoKQoREsE4s0zTKtvONuJ8Mpp7GuqCJP2S56NkXAjB3UEm4ls72NA3WWfci5q88pSsUOJiDjr88HcnkLvaxE2zXnxwzj2l14x_uklMqXKrwlqoKIUUY9uu4kKFDiUoq1yB89sn0EdOENNrJ7eqGxwyXxmZs_fu5ZZ-8rzeMS7vKXpk_w5C7AbxMGf8GTpQ2kgx7E4jecL_prpSuaJ4R0RFNPjchcWFH3j7xyhE7fG1QN-Hhbe7L-uHRSH50HDFck=w512" alt="mamaco" />
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default App
