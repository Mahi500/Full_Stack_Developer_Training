function CustomPagination(props){

 const {currentPage,setCurrentPage,totalPages}={...props};
 const pages=[...Array(totalPages+1).keys()].slice(1);  // array of numbers
 const prevPage=()=>{

    if(currentPage!==1){
    
        setCurrentPage(currentPage-1);

    }

 }

 const nextPage=()=>{

    

    if(currentPage!==totalPages)
    {
        setCurrentPage(currentPage+1);
    }

    
 }


    return(

        <div style={{textAlign:"center"}}>
         <h1>Custom Pagination</h1>
         <button className="btn btn-primary"onClick={()=>prevPage() }style={{marginRight:"10px"}}>prev</button>
         {
            pages.map((item)=>{

                return(
                     
                    <div style={{display:"inline-flex"}}>
                    <li key={item} style={{listStyle:"none",width:"50px",cursor:"pointer"}} onClick={()=>setCurrentPage(item)}>{item}</li>
                    </div>
                )

            })
         }
         <button className="btn btn-primary" onClick={()=>nextPage()}>next</button>
        </div>
    )
}

export default CustomPagination;