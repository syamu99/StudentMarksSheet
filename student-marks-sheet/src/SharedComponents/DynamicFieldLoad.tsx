import { DropdownForm } from './DropdownForm'

import TextFieldForm from '../SharedComponents/TextFieldForm';

export const DynamicFieldLoad = (fieldName: string, item: any) => {
  switch (fieldName) {  
      case "DropdownForm":
          return <DropdownForm {...item} />;
      case "TextFieldForm":
          return <TextFieldForm {...item} />;
    

      default:
          return 'Component Missing';
  }
};
export default DynamicFieldLoad
