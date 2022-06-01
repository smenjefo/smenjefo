import React from 'react';
import { Form as ReactFinalForm } from "react-final-form";
import { Form as UIForm } from "@smenjefo/smenjefo-ui";

interface IFormProps {
  children: (submitting: boolean) => JSX.Element | JSX.Element[];
  initialValues?: Record<string, any>;
  onSubmit: (values: any) => void;
}

const Form = (props: IFormProps) => {
  const onRender = ({ handleSubmit, submitting }) => {
    return (
      <UIForm.Index
        onSubmit={handleSubmit}
      >
        {props.children(submitting)}
      </UIForm.Index>
    );
  };

  return (
    <ReactFinalForm
      onSubmit={props.onSubmit}
      initialValues={props.initialValues}
      render={onRender as () => React.ReactNode}
    />
  );
};

Form.defaultProps = {
  initialValues: {},
};

export default Form;