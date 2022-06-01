import { Field } from "react-final-form";
import { Form as UIForm, Text, Select } from "@smenjefo/smenjefo-ui";

interface IFormSelectComponentProps {
  name: string;
  label: string;
  options?: {
    label: string;
    value: string | number;
  }[];
}

const FormSelectComponent = (props: IFormSelectComponentProps) => {
  return (
    <Field
      name={props.name}
      component="select"
    >
      {({ input }) => {
        return (
          <UIForm.Field>
            <UIForm.FieldLabel>
              <Text>
                {props.label}
              </Text>
            </UIForm.FieldLabel>

            <UIForm.FieldValue>
              <Select.Index additionalProps={input}>
                {props.options.map((option) => {
                  return (
                    <Select.Option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </Select.Option>
                  );
                })}
              </Select.Index>
            </UIForm.FieldValue>
          </UIForm.Field>
        );
      }}
    </Field>
  );
};

FormSelectComponent.defaultProps = {
  options: [],
};

export default FormSelectComponent;