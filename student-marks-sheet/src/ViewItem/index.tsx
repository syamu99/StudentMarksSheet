import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return (<div>{data && <h1>{data.Studentname}, {data.English}, {data.Telugu}, {data.Hindi}, {data.Maths}, {data.Science}{data.Social}{data.totalmarks}</h1>}</div>);
};

export default ViewItem;
