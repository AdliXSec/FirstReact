import AuthLayouts from "../Layouts/AuthLayouts";
import FormLogin from "../Components/FormLogin";

const LoginPages = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPages;
