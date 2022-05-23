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
  useEffect((
    page,
  ) => {
    fetchData();
    
  }, [])


  const fetchData = (
    page,
  ) =>{
    axios({
      method: 'get',
      url: `https://json-server-mocker-masai.herokuapp.com/candidates`,
      params:{
        _page: page,
      }
    }).then(function(res){
      setData(res.data);
      setLoading(false);
    }).catch(function(error){
      setLoading(false);
      return error;
    })
  }

 

  return (
    <div className="App">
      <div>
        {loading && <div id="loading-container">...Loading</div>}
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button  title="PREV" id="PREV" />
        <Button  id="NEXT" title="NEXT" />
      </div>
      {data.map((item) => {
        return <CandidateCard key={item.id} {...item}/>
      })}
    </div>
  );
}

