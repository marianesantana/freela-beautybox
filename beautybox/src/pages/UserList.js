import React, { Component } from 'react';
import "./UserList.css"
import loupe from '../assets/images/lupa.svg'
import trash from '../assets/images/trash2.svg'
import settings from '../assets/images/config.svg'
import more from '../assets/images/more.svg'
import trash2 from '../assets/images/garbage-modal.svg'
import trashsucceded from '../assets/images/trashsucceded.svg'
import line from '../assets/images/Line 500.svg'
import th from '../assets/images/trocinho.svg'

class UserList extends Component {
    constructor(){
        super();

    }
    state = {show: false};

    showModal = () => {
        this.setState({ show:true });
    };
    hideModal = () => {
        this.setState({ show: false });
    }
   
    render() {
        return (
            <section id="user-list">
                <header>
                    <div className="divLupa">
                        <h1>Usuários cadastrados</h1>
                        <img src={line}></img>
                        <img src={loupe} alt="loupe"></img>

                    </div>
                </header>
                <div className="table-content">
                        <table className="">
                            <thead>
                                <tr>
                                    <th>Nome<img src={th} alt="setinha"/></th>
                                    <th>Empresa<img src={th} alt="setinha"/></th>
                                    <th>E-mail<img src={th} alt="setinha"/></th>
                                
                                </tr>
                            </thead>
                            <tbody>
                            <div className="scrollit"></div>

                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>
                                <Modal show={this.state.show} handleClose={this.hideModal} />


                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>

                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>

                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal} ></img></td>

                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>

                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>

                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>

                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>

                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>

                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>

                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>

                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>

                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>

                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>

                            </tr>
                            <tr>
                                <td>Nome do Usuario</td>
                                <td>Empresa</td>
                                <td>nome.sobrenome@empresa.com.br</td>
                                <td><img src={settings} alt="settings"></img></td>
                                <td><img src={trash} alt="trash" onClick={this.showModal}></img></td>

                            </tr>
                            </tbody>

                        </table>
                    </div>
                        <footer>
                        <hr></hr>

                            <img src={more} alt="plus"></img>
                        </footer>
            </section>
        )
    }
}
const Modal = ({ handleClose, show }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
            <img src={trash2}></img>
            <p>Você deseja remover o usuário selecionado? </p>
            <hr></hr>
            <button href="" onClick={handleClose}> Cancelar </button>
            <button href="/" > Confirmar </button>


        </section>
      </div>
    );
  };
  const AnotherModal = ({ handleClose, show }) => {
    const showHideClassName2 = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName2}>
        <section className='modal-main'>
            <img src={trashsucceded}></img>
            <p>Usuário removido com sucesso </p>
            <a href="" onClick={handleClose}> Voltar para página inicial </a>


        </section>
      </div>
    );
  };
export default UserList;