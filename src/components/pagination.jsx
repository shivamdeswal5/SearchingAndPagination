import React from 'react'
import '../assets/css/pagination.css'

export default function pagination({totalPosts,postPerPage,setCurrentPage,currentPage}) {
    let pages = [];
    for(let i = 1; i<= Math.ceil(totalPosts/postPerPage);i++){
        pages.push(i);
    }
  return (
    <div className='pagination'>
        {
            pages.map( (page,index)=> {
                return <button key={index}
                onClick={()=>setCurrentPage(page)} 
                className={page == currentPage ? "active" : ""}               
                >{page}
                </button>
    
            })
        }
    </div>
  )
}
