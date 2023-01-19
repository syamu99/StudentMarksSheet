import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { STUDENT_MARKS_FORM } from "./helper";
import { PrimaryButton } from "@fluentui/react";
import { useParams } from "react-router-dom";
import DynamicFieldLoad from "../SharedComponents/DynamicFieldLoad";
import "./Form.scss";

const StudentMarksForm = () => {
  interface IStudentMarksData {
    Studentname?: string;
    rollnumber?: number;
    english?: number;
    telugu?: number;
    hindi?: number;
    maths?: number;
    science?: number;
    social?: number;
    extraactivities?: string;
  }

  //Schema Declaration
  const StudentSchema: yup.SchemaOf<IStudentMarksData> = yup.object().shape({
    Studentname: yup.string().min(5).max(15),
    rollnumber: yup.number(),
    english: yup.number().positive().integer().max(100),
    telugu: yup.number().min(2).max(100),
    hindi: yup.number().min(2).max(100),
    maths: yup.number().min(2).max(100),
    science: yup.number().min(2).max(100),
    social: yup.number().min(2).max(100),
    extraactivities: yup.string(),
    totalmarks: yup.number(),
  });
  const StudentMarksFormMethods = useForm<any>({
    mode: "all",
    resolver: async (data, context, options) => {
      return yupResolver(StudentSchema)(data, context, options);
    },
  });

  const [studentSubmittedData, setStudentSubmittedData] = React.useState();

  const id = useParams();
  const navigation = useNavigate();
  const StudentMarksFormSubmit: SubmitHandler<any> = async (data: any) => {
    setStudentSubmittedData(data);
    if (id.id) {
      editStudentForm(data);
    } else {
      createStudentForm(data);
    }
    StudentMarksFormMethods.reset({});
    navigation("/View");
  };
  const getAdditionalProps = (item: any) => {
    item.control = StudentMarksFormMethods.control;
    item.setValue = StudentMarksFormMethods.setValue;
    item.register = StudentMarksFormMethods.register;
    return item;
  };

  const [data, setData] = React.useState<any>();
  const getStudentMarksData = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/data/${id.id}`);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editStudentForm = async (editData: any) => {
    try {
      const result = await axios.put(
        `http://localhost:5000/data/${id.id}`,
        editData
      );
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createStudentForm = async (editData: any) => {
    const generateNumber: any = Math.random();
    const newData = { ...editData, id: generateNumber };

    try {
      const result = await axios.post(`http://localhost:5000/data`, newData);
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStudentMarksData();
  }, [id]);

  useEffect(() => {
    data &&
      Object.entries(data).forEach(([key, value]: any) => {
        StudentMarksFormMethods.setValue(key, value, { shouldValidate: true });
      });
  }, [data]);

  console.log(
    StudentMarksFormMethods.watch(),
    StudentMarksFormMethods.formState.errors
  );

  return (
    <>
      <div className="header_one">
        <img src="https://zelarsoft.com/wp-content/uploads/2021/10/logo.png" />
      </div>

      <div className="form">
        <div className="form_content">
        <h1>Create Student Marks Profile</h1>
          <hr/>
          <FormProvider {...StudentMarksFormMethods}>
            <form
              onSubmit={StudentMarksFormMethods.handleSubmit(
                StudentMarksFormSubmit
              )}
            >
              <div className="container">
                {STUDENT_MARKS_FORM?.map((rows: any) => {
                  return (
                    <div className={`row ${rows.className}`}>
                      {rows.controls?.map((item: any) => {
                        const updatedItem = getAdditionalProps(item);
                        return DynamicFieldLoad(item.type, updatedItem);
                      })}
                    </div>
                  );
                })}
              </div>
              <div className="line2"><hr/></div>
              <div className="form_footer">
                <PrimaryButton  className="pmBtn"
                  type="submit"
                  onClick={StudentMarksFormMethods.handleSubmit(
                    StudentMarksFormSubmit
                  )}
                >
                  Submit
                </PrimaryButton>
              </div>
            </form>
          </FormProvider>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default StudentMarksForm;
