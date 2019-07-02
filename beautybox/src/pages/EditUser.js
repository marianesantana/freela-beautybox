import React, { Component } from 'react';
import './EditUser.css'
import '../components/Modal.css'
import cadeado from '..//assets/images/cadeado.svg'
export default class EditUser extends Component {
    state = {show: false};

    showModal = () => {
        this.setState({ show:true });
    };
    hideModal = () => {
        this.setState({ show: false });
      }

  render() {
    return (
        <section id="form-header">
            <div className="form-content">
                <hr></hr>
                <a href="/"> Voltar para painel</a>
                <h1>Editar Usuário</h1>
            </div>
            <div className="form-indeed">
                <form action="">
                    <p>Dados do usuário</p>
                    <input type="text" placeholder="Nome" name="nome" required/>
                    <input type="text" placeholder="Empresa" name="empresa" required/>
                    <input type="text" placeholder="E-mail" name="email" required/>
                    <input type="password" placeholder="Nova Senha" name="senha" required/>
                </form>
            </div>
            <p class="a">Níveis de Acesso</p>

            <div class="row" id="content-area">
                <div class="column">
                    <label for="check"/> Home
                    <input class="apple-switch" id="check"type="checkbox"/>
                    <label for="check"> Essência da Marca </label>
                    <input class="apple-switch" type="checkbox"/>
                    Princípios Criativos
                    <input class="apple-switch" type="checkbox"/>
                    Tom de Voz
                    <input class="apple-switch" type="checkbox"/>
                    Identidade Visual
                    <input class="apple-switch" type="checkbox"/>
                </div>
                <div class="column">
                    Logotipo
                    <input class="apple-switch" type="checkbox"/>
                    Cores
                    <input class="apple-switch" type="checkbox"/>
                    Tipografias
                    <input class="apple-switch" type="checkbox"/>
                    Elementos Gráficos
                    <input class="apple-switch" type="checkbox"/>
                    Estilo Fotográfico
                    <input class="apple-switch" type="checkbox"/>

                </div>
                <div class="column">
                    Iconografia
                    <input class="apple-switch" type="checkbox"/>
                    Inspiração na prática
                    <input class="apple-switch" type="checkbox"/>
                    Momentos de marca
                    <input class="apple-switch" type="checkbox"/>
                    Arquitetura de Marca
                    <input class="apple-switch" type="checkbox"/>
                </div>

            </div>
            
            

            <footer className="content-footer">
                <button> Cancelar </button>
                <button onClick={this.showModal}>Salvar</button>
                <Modal show={this.state.show} handleClose={this.hideModal} />
            </footer>
        </section>
    );
  }
}
const Modal = ({ handleClose, show }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
            <img src={cadeado}></img>
            <p>Alterações salvas com sucesso </p>
            <hr></hr>
            <a href="" onClick={handleClose}> Voltar para página inicial </a>
        </section>
      </div>
    );
  };
  
