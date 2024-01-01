'use client'
import React, { useEffect, useState } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { useRouter } from 'next/navigation'

const PaginationComponent = ({currentPageNo,productList}, searchParams) => {

    const Current =  parseInt(currentPageNo ?? 1)
    const TotalPage = Math.ceil(productList/6)
    const [currentPage, setCurrentPage] = useState(Current); 

    const router = useRouter()

    const handlePreviousClick = (event) => { 
      event.preventDefault();
      if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
        router.push(`/products?page=${ currentPage==1 ? "1" : currentPage - 1 }`)
      }
    };
  
    const handleNextClick = (event) => {
      event.preventDefault();
      if (currentPage < Math.ceil(productList/6)) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
      router.push(`/products?page=${ currentPage=== TotalPage ? TotalPage : currentPage + 1}`)
    };
    useEffect(()=>{

    },[searchParams])
  return (
    <div className='m-5 mb-10' >
    <Pagination>
     <PaginationContent>    
         <PaginationPrevious href={""} onClick={handlePreviousClick} />
         {currentPage ? Current : 1 } / {TotalPage}
         <PaginationNext href={""} onClick={handleNextClick} />  
     </PaginationContent>
   </Pagination> 
 
    </div>
 
  )
}
export default PaginationComponent