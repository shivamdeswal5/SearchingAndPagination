import React, { useState } from 'react'
import '../assets/css/cards.css'
import data from '../assets/data/products.json';
import CardItem from './card-item';
import Pagination from './pagination';

export default function cards() {

    const [searchItem,setSearchItem] = useState("");
    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage,setPostPerPage] = useState(4);

    const handelSearch = (e) =>{
        setSearchItem(e.target.value);
        console.log(searchItem);
    }

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    const currentData = data.slice(firstPostIndex,lastPostIndex);

  return (
    <div className='wrapper'>

      <input
      type='text'
      name ='search'
      placeholder='Search ...'
      className='search'
      onChange={handelSearch}
      />

      <div className='cards'>
        {
            data.filter((item)=>{
                return searchItem.toLocaleLowerCase() === '' ? item : item.category.toLocaleLowerCase().includes(searchItem);
            }).map((data,index)=>{
                return (
                    <CardItem id = {data.id} data = {data} cardIndex = {index}/>
                )
            })
        }
      </div>

      <Pagination 
      className ='fixPos'
      totalPosts = {data.length} 
      postPerPage = {postPerPage} 
      setCurrentPage ={setCurrentPage}
      currentPage = {currentPage}/>
      
    </div>

  )
}
