import FormInput from "./Elements/Input";
import Button from "./Elements/Button";

const FormRegistrasi = () => {
  return (
    <form action="">
      <FormInput type="email" placeholder="email" name="email" label="email" />
      <FormInput
        type="text"
        placeholder="Username"
        name="username"
        label="username"
      />
      <FormInput
        type="password"
        placeholder="Password"
        name="password"
        label="password"
      />
      <FormInput
        type="password"
        placeholder="Confirm Password"
        name="Confirm Password"
        label="Confirm Password"
      />
      <Button variant="bg-blue-700">Login</Button>
    </form>
  );
};

export default FormRegistrasi;
