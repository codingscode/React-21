
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Pessoa.css'
import Auxiliar from '../hoc/Auxiliar';
import comClasse from '../hoc/comClasse'

class Pessoa extends Component {
   
   componentDidMount() {
      this.inputElement.focus();  //destaca o 3º
   }

   render() {
      console.log('[Pessoa.js] rendering...') 
      return (
         <Auxiliar>
            <p key="i1" onClick={this.props.click}>Eu sou {this.props.nome}, Eu sou uma Pessoa e tenho {this.props.idade} anos !</p>
            <p key="i2" >{this.props.children}</p>
            <input key="i3" ref={(inputEl) => {this.inputElement = inputEl}} type='text' onChange={this.props.changed} value={this.props.nome}></input>
         </Auxiliar>
      );
   }
   
}

Pessoa.propTypes = {
   click: PropTypes.func,
   nome: PropTypes.string,
   idade: PropTypes.number,
   changed: PropTypes.func
};

export default comClasse(Pessoa, classes.Pessoa);
