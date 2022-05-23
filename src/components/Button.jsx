import styles from "./Button.module.css";

function Button({ title, onClick, disabled, id }) {
    const handleClick= (id)=>{
      if(id==='SORT_BUTTON'){
          console.log('sort');
      }
      else if(id==="PREV"){
        
      }
      else{

      }
    }
  return (
      <button onClick={()=>handleClick(id)} id={id} data-testid="button-component" className={styles.button}>
      {title}
    </button>
    
  );
}

const PaginationComponent = ({
  currentPage,
  lastPage,
  onPageChange
}) => {
  const arr = new Array(lastPage).fill(0);
  return (
    <div>
      {
        arr.map( (item, page)=> <button onClick={()=>onPageChange(page+1)} disabled={(page+1)===currentPage}> {page+1} </button> )
      }
    </div>
  )
}

export default Button;