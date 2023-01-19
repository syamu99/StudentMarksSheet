import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DetailsList, DetailsListLayoutMode, IColumn } from "@fluentui/react";
import "./View.scss";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import {  MdOutlineRemoveRedEye } from "react-icons/md";

const View = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const url = "http://localhost:5000/data";
      const result: any = await axios.get(url);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteRequest = async (id: any) => {
    try {
      const url = `http://localhost:5000/data/${id}`;
      const result: any = await axios.delete(url);
      console.log(result);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns: IColumn[] = [
    {
      key: "column1",
      name: "Studentname",
      fieldName: "Studentname",
      minWidth: 60,
      maxWidth: 100,
      isResizable: true,
    },
    {
      key: "column2",
      name: "Roll number",
      fieldName: "Role Number",
      minWidth: 70,
      maxWidth: 100,
      isResizable: true,
    },
    {
      key: "column3",
      name: "English",
      fieldName: "English",
      minWidth: 70,
      maxWidth: 100,
      isResizable: true,
    },
    {
      key: "column4",
      name: "Telugu",
      fieldName: "Telugu",
      minWidth: 70,
      maxWidth: 100,
      isResizable: true,
    },
    {
      key: "column5",
      name: "Hindi",
      fieldName: "Hindi",
      minWidth: 70,
      maxWidth: 100,
      isResizable: true,
    },
    {
      key: "column6",
      name: "Maths",
      fieldName: "Maths",
      minWidth: 70,
      maxWidth: 100,
      isResizable: true,
    },

    {
      key: "column7",
      name: "Science",
      fieldName: "Science",
      minWidth: 70,
      maxWidth: 100,
      isResizable: true,
    },
    {
      key: "column8",
      name: "Social",
      fieldName: "Social",
      minWidth: 70,
      maxWidth: 100,
      isResizable: true,
    },
    {
      key: "column9",
      name: "total marks",
      fieldName: "Total Marks",
      minWidth: 70,
      maxWidth: 100,
      isResizable: true,
    },
    {
      key: "column10",
      name: "Actions ",
      fieldName: "Actions",
      minWidth: 70,
      maxWidth: 100,
      isResizable: true,

      onRender: (item: any) =>
        item.id && (
          <>
            <Link className="button" to={`/View/${item.id}`}>
              <MdOutlineRemoveRedEye className="vw" size={20} color={"#B0B3B5"} />
            </Link>
            <Link className="button" to={`/update/${item.id}`}>
              <MdModeEdit className="edit" size={20} color={"#B0B3B5"} />
            </Link>
            <Link
              className="button"
              onClick={() => deleteRequest(item.id)}
              to=""
            >
              <MdDelete className="delete" size={20} color={"#B0B3B5"} />
            </Link>
          </>
        ),
    },
  ];
  return (
    <div className="header">
      <div className="header_one">
        <img src="https://zelarsoft.com/wp-content/uploads/2021/10/logo.png" />
      </div>
      <body className="maindiv">
        {/* <Link className='btn' to = "create" >Create</Link> */}
        <Link className="button" to="/create">
          <button className="addbtn">Add</button>
        </Link>

        <div className="table">
          {data && (
            <DetailsList
              items={data}
              columns={columns}
              setKey="set"
              layoutMode={DetailsListLayoutMode.justified}
            />
          )}
        </div>
      </body>
    </div>
  );
};

export default View;
