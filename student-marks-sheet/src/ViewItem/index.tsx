import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './viewitem.scss'
import {Link} from "react-router-dom"


const ViewItem = () => {
  const [data, setData] = useState<any>();

  const id = useParams();

  const getData = async (item: any) => {
    try {
      const url = `http://localhost:5000/data/${item.id}`;
      const result: any = await axios.get(url);
      setData(result.data);

    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);
  
  useEffect(() => {
    getData(id);
  }, [id]);

  return (
  <div className="databox"> 
    {data && 
  <>
  <h2>Student Name: {data.Studentname}</h2>
  <p>Roll Number: {data.Rollnumber} </p>
  <p>English Marks: {data.English}</p>
  <p>Telugu Marks: {data.Telugu}</p>
  <p>Hindi Marks: {data.Hindi}</p> 
  <p>Maths Marks: {data.Maths}</p> 
  <p>Science Marks: {data.Science}</p>
  <p>Social Marks: {data.Social}</p>
  <p>Total Marks: {data.totalmarks}</p>
  </>
  
  }

    <div>
      <Link className="button" to="/View">
      <button className="databox__viewpage"> Back to View</button>
      </Link>
    </div>
  </div>

  );
}



export default ViewItem;
