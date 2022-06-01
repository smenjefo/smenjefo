import { Form as UIForm, Button, Text } from "@smenjefo/smenjefo-ui";

interface IFormSubmitComponentProps {
  label: string;
  disabled?: boolean;
}

const FormSubmitComponent = (props: IFormSubmitComponentProps) => {
  return (
    <UIForm.Field>
      <Button
        theme="success"
        disabled={props.disabled}
      >
        <Text
          theme="error"
          weight="bold"
          type="decorated"
        >
          {props.label}
        </Text>
      </Button>
    </UIForm.Field>
  );
};

FormSubmitComponent.defaultProps = {
  disabled: false,
};

export default FormSubmitComponent;