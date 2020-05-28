import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';


import '../assets/styles/App.scss';

const Home = ({ myList, searching, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />

      { searching.length > 0 &&
        <Categories title="Búsqueda"> 
          <Carousel>
          { searching.map(item =>
            <CarouselItem 
              key={item.id} 
              {...item}
            />
          )}
          </Carousel>
        </Categories>
      }

      { myList.length > 0 &&
        <Categories title="Mi lista"> 
          <Carousel>
          { myList.map(item =>
            <CarouselItem 
              key={item.id} 
              {...item}
              isList
            />
          )}
          </Carousel>
        </Categories>
      }

      <Categories title="Tendencias"> 
        <Carousel>
          {trends.map(item => 
            <CarouselItem key={item.id} {...item}/>
           )}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Videos"> 
        <Carousel>
          {originals.map(item => 
            <CarouselItem key={item.id} {...item}/>  
          )}
        </Carousel>
      </Categories>
    </>
  );
}

const mapStateToProps = state => {
  return {
    searching: state.searching,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  }
};

export default connect(mapStateToProps, null)(Home);