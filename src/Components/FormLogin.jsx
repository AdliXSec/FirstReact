import FormInput from "./Elements/Input";
import Button from "./Elements/Button";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button variant="bg-blue-700">Login</Button>
    </form>
  );
};

export default FormLogin;
