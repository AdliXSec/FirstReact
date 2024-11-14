import AuthLayouts from "../Layouts/AuthLayouts";
import FormLogin from "../Components/FormLogin";

const LoginPages = () => {
  return (
    <AuthLayouts title="Login" subtitle="enter your detail">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPages;
