import React, { Component } from 'react';
import './CreateUser.css'

export default class CreateUser extends Component {
  render() {
    return (
        <section id="form-header">
            <div className="form-content">
                <hr></hr>
                <a href="/"> Voltar para painel</a>
                <h1>Criar Usuário</h1>
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

            <article className="content-area">
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
                Iconografia
                <input class="apple-switch" type="checkbox"/>
                Inspiração na prática
                <input class="apple-switch" type="checkbox"/>
                Momentos de marca
                <input class="apple-switch" type="checkbox"/>
                Arquitetura de Marca
                <input class="apple-switch" type="checkbox"/>

            </article>
        </section>
    );
  }
}

