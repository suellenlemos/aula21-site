import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class Contato extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Contato</title>
        </Helmet>
        <div className="page">
          <div className="conteudo">
            <div className="flex">
              <div className="resumo">
                <h1>Me contrate!</h1>
                <p>Estou disponível para trabalhos freelancer</p>
                <h2>Meus Contatos</h2>

                <p>Email: meu@memail.com</p>
                <p>Telefone: 19 0000-0000</p>
                <p>Github</p>
                <p>Linkedin</p>
              </div>
              <img src="http://trydo.rainbowit.net/assets/images/about/about-6.jpg" alt="Perfil" />
            </div>
          </div>
        </div>
      </>
    )
  }
}
