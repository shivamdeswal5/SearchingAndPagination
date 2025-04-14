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

    // debounce
    const debounce = (func,wait) =>{
      let timerId
      return (...args) =>{
        clearTimeout(timerId);
        timerId = setTimeout(()=> func(...args),wait)
      }
    }
    const debounceCall = debounce(handelSearch,400);



    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;

    const filterData = data.filter((item)=>{
      return searchItem.toLocaleLowerCase() === '' ? item : item.category.toLocaleLowerCase().includes(searchItem);
    });

    const currentData = filterData.slice(firstPostIndex,lastPostIndex);

  return (
    <div className='wrapper'>

      {/* Input Bar */}
      <input
      type='text'
      name ='search'
      placeholder='Search ...'
      className='search'
      onChange={debounceCall}
      />

      {/* Products */}
      <div className='cards'>
        {
            currentData.map((data,index)=>{
                return (
                    <CardItem id = {data.id} data = {data} cardIndex = {index}/>
                )
            })
        }
      </div>

      {/* Pagination */}
      <div>
        <Pagination 
        className ='fixPos'
        totalPosts = {filterData.length} 
        postPerPage = {postPerPage} 
        setCurrentPage ={setCurrentPage}
        currentPage = {currentPage}
        />
      </div>
      
    </div>

  )
}
