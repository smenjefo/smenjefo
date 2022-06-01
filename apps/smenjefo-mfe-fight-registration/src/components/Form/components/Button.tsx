import { Form as UIForm, Button, Text } from "@smenjefo/smenjefo-ui";

interface IFormButtonComponentProps {
  label: string;
  disabled?: boolean;
  onClick: () => any;
  theme?: 'primary' | 'secondary' | 'success' | 'error';
}

const FormButtonComponent = (props: IFormButtonComponentProps) => {
  return (
    <UIForm.Field>
      <Button
        type="submit"
        disabled={props.disabled}
        onClick={props.onClick}
        theme={props.theme}
      >
        <Text
          theme={props.theme}
          weight="bold"
          type="decorated"
        >
          {props.label}
        </Text>
      </Button>
    </UIForm.Field>
  );
};

FormButtonComponent.defaultProps = {
  disabled: false,
  theme: 'secondary',
};

export default FormButtonComponent;