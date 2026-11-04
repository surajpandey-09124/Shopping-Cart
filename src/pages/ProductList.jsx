import React from "react";
import SearchFilter from '../components/SearchFilter';
import CategoryFilter from "../components/CategoryFilter";
import {useCart} from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import {useState} from 'react';
const ProductList = () => {
    console.log(useCart());
  let {products}=useCart();

  let [search,setSearch]=useState('');
  let [select,setSelect]=useState('All');

  let filterProducts=products.filter((product)=>{
    let matchSearch=product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase());

    let matchCategory=select === 'All' || product.category === select;

    return matchSearch && matchCategory;
  })
  return <>
    <SearchFilter search={search} setSearch={setSearch}/>
    <CategoryFilter select={select} setSelect={setSelect}/>
    <div className='p-4'>
    <h2 className='text-2xl font-bold '>Featured Gear ({products.length} Items)</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center mt-4'>
      {filterProducts.map((product)=><ProductCard key={product.id} product={product}/>)}
    </div>
    </div>
  </>;
};

export default ProductList;

// 1:17:29 productList coding happen 
