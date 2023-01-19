import * as React from "react";
import { Dropdown, IDropdownOption } from "@fluentui/react";
import { Control, Controller, useFormContext } from "react-hook-form";

export interface IDropDownProps {
  options: IDropdownOption | any;
  name: string;
  label: any;
  placeholder?: string;
  control?: Control<any>;
  register?: any;
  id?: any;
  isdisabled?: boolean;
  defaultSelectedKeys?: any;
  defaultSelectedKey?: string;
}
export const DropdownForm: React.FC<IDropDownProps> = ({
  name,
  label,
  options,
  placeholder,
  id,
  isdisabled,
  defaultSelectedKeys,
  defaultSelectedKey,
}: IDropDownProps) => {
  const { control, register } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
      }) => (
        <>
          <input {...register(name)} hidden />
          <Dropdown
            placeholder={placeholder}
            label={label}
            options={options}
            id={name}
            styles={{title:{background:"rgb(237,237,237)", border:0, dropdownOptionText:{color: 'blue'}}}}
            onBlur={onBlur}
            selectedKey={value}
            defaultSelectedKeys={defaultSelectedKeys}
            defaultSelectedKey={defaultSelectedKey}
            {...register}
            onChange={(
              e: React.FormEvent<HTMLDivElement> | any,
              value1: IDropdownOption | any
            ) => {
              onChange(value1.key);
            }}
            errorMessage={error ? error.message : ""}
            disabled={isdisabled}
          />
        </>
      )}
    />
  );
};
