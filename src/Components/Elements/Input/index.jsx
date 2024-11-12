import Label from "./label";
import Input from "./input";
import Textarea from "./textarea";

const FormInput = (props) => {
  const { type, placeholder, name, label, custom = "" } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name} custom={custom}>
        {label}
      </Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

const FormTextarea = (props) => {
  const { name, text, label, placeholder, custom = "" } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name} custom={custom}>
        {label}
      </Label>
      <Textarea name={name} placeholder={placeholder}>
        {text}
      </Textarea>
    </div>
  );
};

export { FormTextarea };
export default FormInput;
