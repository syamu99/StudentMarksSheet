import { IChoiceGroupOption } from "@fluentui/react";

export const ExtraActivities: IChoiceGroupOption[] = [
  { key: "Env Studies", text: "Env Studies" },
  { key: "Project", text: "Project" },
];
export const STUDENT_MARKS_FORM = [
  {
    row: 0,
    className: "rowOne",
    controls: [
      {
        type: "TextFieldForm",
        name: "Studentname",
        label: "Studentname",
        placeholder: "Enter name",
        isRequired: true,
      },
      {
        type: "TextFieldForm",
        name: "Role Number",
        typeOf: "number",
        label: "Roll Number",
        placeholder: "Enter Rollno",
        // isRequired: true,
      },
    ],
  },
  {
    row: 0,
    className: "rowTwo",
    controls: [
      {
        type: "TextFieldForm",
        name: "English",
        label: "English",
        typeOf: "number",
        placeholder: "Enter marks",
        isRequired: true,
      },
      {
        type: "TextFieldForm",
        name: "Telugu",
        label: "Telugu",
        placeholder: "Enter marks",
        typeOf: "number",
        isRequired: true,
      },
      {
        type: "TextFieldForm",
        name: "Hindi",
        label: "Hindi",
        placeholder: "Enter marks",
        typeOf: "number",
        isRequired: true,
      },
      {
        type: "TextFieldForm",
        name: "Maths",
        label: "Maths",
        placeholder: "Enter marks",
        typeOf: "number",
        isRequired: true,
      },
      {
        type: "TextFieldForm",
        name: "Science",
        label: "Science",
        placeholder: "Enter marks",
        typeOf: "number",
        isRequired: true,
      },
      {
        type: "TextFieldForm",
        name: "Social",
        label: "Social",
        placeholder: "Enter marks",
        typeOf: "number",
        isRequired: true,
      },
      {
        type: "TextFieldForm",
        name: "Total Marks",
        label: "Total Marks",
        placeholder: "Enter Total marks",
        typeOf: "number",
        isRequired: true,
      },
      {
        type: "DropdownForm",
        name: "extraactivities",
        label: "ExtraActivities",
        isRequired: false,
        options: ExtraActivities,
        placeholder: "Select",
      },
    ],
  },
];
