function Main(){
    return(
        <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Dev.Front</h3>
            </div>
            <div className="item-menu">
              <a href="#">Login</a>
            </div>
          </div>

        <div className="form">
        <h2>Entre em Contato !</h2>
              <form>
                  <div className="items-form">
                      <input placeholder="Nome Completo" type="text" />
                      <input placeholder="E-mail" type="text" />
                      <input placeholder="Telefone com DD" type="text" />
                      <input placeholder="CPF" type="text" />
                      <input type="submit" />
                  </div>
              </form>
            </div>
          </div>
        </div>
    )
}

export default Main;