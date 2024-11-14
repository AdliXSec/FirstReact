import AuthLayouts from "../Layouts/AuthLayouts";
import FormRegistrasi from "../Components/FormRegistrasi";

const RegistrasiPages = () => {
  return (
    <AuthLayouts title="Registrasi" subtitle="enter your detail">
      <FormRegistrasi />
    </AuthLayouts>
  );
};

export default RegistrasiPages;
