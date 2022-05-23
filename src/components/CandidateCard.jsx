import styles from "./CandidateCard.module.css";

function CandidateCard({id,avatar,name,rating,salary,title,company_name}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img alt="logo" width="100px" height="100px" src= {avatar}/>
      <div>
        <div>Name:{name}</div>
        <div>
              <h3>{title}</h3>
              <h5>{company_name}</h5>
        </div>
      </div>
      <div>Salary : $ {salary}</div>
    </div>
  );
}

export default CandidateCard;
