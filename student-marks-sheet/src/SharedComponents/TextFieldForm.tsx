import { TextField } from "@fluentui/react";
import { Control, Controller, useFormContext } from "react-hook-form";
import React from "react";

interface ITextFieldFormprops {
  name: string | number | any;
  typeOf?: string | number;
  label: string;
  isRequired?: boolean;
  isReadOnly: boolean;
  isDisabled?: boolean;
  defaultValue?: string;
  control?: Control<any>;
  register?: any;
  placeholder?: string;
}

const TextFieldForm = ({
  name,
  label,
  isRequired,
  isDisabled,
  defaultValue,
  isReadOnly,
  placeholder,
  typeOf,
}: ITextFieldFormprops) => {
  const { control, register } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <div
                className={
                  isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                }
              >
                <TextField
                  type={typeOf === "number" ? "number" : "text"}
                  {...field}
                  label={label}
                  disabled={isDisabled}
                  readOnly={isReadOnly}
                  styles={{fieldGroup:{background:"rgb(237,237,237)", border:0}}}
                  defaultValue={defaultValue}
                  errorMessage={error ? error.message : ""}
                  placeholder={placeholder}
                  className={
                    isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                  }
                />
              </div>
            </>
          );
        }}
      />
    </>
  );
};
export default TextFieldForm
