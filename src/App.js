import React, { useState ,useEffect} from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import axios from "axios"
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [salaryOrder,setSalaryOrder] = useState('ASC');
  useEffect(() => {
    fetchData(page,salaryOrder);
    
  }, [page,salaryOrder])


  const fetchData = (
    page,salaryOrder
  ) =>{
    setLoading(true)
    axios({
      method: 'get',
      url: `https://json-server-mocker-masai.herokuapp.com/candidates`,
      params:{
        _page: page,
        _limit: 5,
        _sort: 'salary',
        _order: salaryOrder,
      }
    }).then(function(res){
      setData(res.data);
      setLoading(false);
    }).catch(function(error){
      setLoading(false);
      return error;
    })
  }

  const handleclick = () =>{
      if(salaryOrder==="ASC"){
        setSalaryOrder("DESC");
        setPage(1);
      }
      else{
        setSalaryOrder("ASC");
        setPage(1);
      }
  }
 
  return (
    <div className="App">
      <div>
        {loading && <div id="loading-container">...Loading</div>}
        <Button   id="SORT_BUTTON" title={`Sort by Ascending Salary`} onClick={()=>handleclick()}/>
        <Button  title="PREV" id="PREV" disabled={page===1} onClick={() => setPage(page - 1)}/>
        <Button  id="NEXT" title="NEXT" onClick={() => setPage(page + 1)}/>
      </div>
      {data.map((item) => {
        return <CandidateCard key={item.id} {...item}/>
      })}
    </div>
  );
}

