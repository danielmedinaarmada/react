import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { searchRequest } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = ( props )  => {
  const { isHome } = props;
  const inputStyle =  classNames('input', {
    isHome,
  });

  const handleInput = event=> {
    props.searchRequest(event.target.value)
  }

  return(
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input 
        name='search'
        type="text" 
        className={inputStyle} 
        placeholder="Buscar..." 
        onChange={handleInput}
      />
    </section>
  );
}

const mapStateToProps = state => {
  return {
    searching: state.searching
  }
};

const mapDispatchToProps = {
  searchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);