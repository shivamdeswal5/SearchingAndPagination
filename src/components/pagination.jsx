import React from 'react'
import '../assets/css/pagination.css'

// export default function pagination({totalPosts,postPerPage,setCurrentPage,currentPage}) {
//     let pages = [];
//     for(let i = 1; i<= Math.ceil(totalPosts/postPerPage);i++){
//         pages.push(i);
//     }
//   return (
//     <div className='pagination'>
//         {
//             pages.map( (page,index)=> {
//                 return <button key={index}
//                 onClick={()=>setCurrentPage(page)} 
//                 className={page == currentPage ? "active" : ""}               
//                 >{page}
//                 </button>
    
//             })
//         }
//     </div>
//   )
// }

export default function Pagination({
    totalPosts,
    postPerPage,
    setCurrentPage,
    currentPage,
  }) {
    const totalPages = Math.ceil(totalPosts / postPerPage);
  
    const goToPrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const goToNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    return (
      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  }
  