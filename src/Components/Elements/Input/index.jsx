import Label from "./label";
import Input from "./input";

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

export default FormInput;
