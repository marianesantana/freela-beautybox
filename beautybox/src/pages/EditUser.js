import React, { Component } from 'react';
import './EditUser.css'
import '../components/Modal.css'
import cadeado from '..//assets/images/cadeado.svg'
import './w3.css'
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

            <div class="content-area">
                <div class="w3-third">
                    <label for="check"/> Home
                    <input class="apple-switch"type="checkbox"/>
                    <br></br>
                    <label for="check"> Essência da Marca </label>
                    <input class="apple-switch" type="checkbox"/>
                    <br></br>

                    Princípios Criativos
                    <input class="apple-switch" type="checkbox"/>
                    <br></br>

                    Tom de Voz
                    <input class="apple-switch" type="checkbox"/>
                    <br></br>

                    Identidade Visual
                    <input class="apple-switch" type="checkbox"/>
                </div>
                <div class="w3-third">
                    Logotipo
                    <input class="apple-switch" type="checkbox"/>
                    <br></br>

                    Cores
                    <input class="apple-switch" type="checkbox"/>
                    <br></br>

                    Tipografias
                    <input class="apple-switch" type="checkbox"/>
                    <br></br>

                    Elementos Gráficos
                    <input class="apple-switch" type="checkbox"/>
                    <br></br>

                    Estilo Fotográfico
                    <input class="apple-switch" type="checkbox"/>
                </div>
                <div class="w3-third">
                    Iconografia
                    <input class="apple-switch" type="checkbox"/>
                    <br></br>

                    Inspiração na prática
                    <input class="apple-switch" type="checkbox"/>
                    <br></br>

                    Momentos de marca
                    <input class="apple-switch" type="checkbox"/>
                    <br></br>

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
  
