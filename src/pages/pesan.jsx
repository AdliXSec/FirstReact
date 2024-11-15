import Card from "../Components/Elements/card";
import Navbar from "../Components/Elements/Nav/nav";
import FormPesan from "../Components/FormPesan";
import AuthLayouts from "../Layouts/AuthLayouts";

function Pesan() {
  return (
    <>
      {
        <AuthLayouts title="Lix Anonymous Message">
          <Card title="dari ...">hai jaga kesehatan ya</Card>
          <Card title="dari ...">hai jaga kesehatan ya</Card>
          <Card title="dari ...">hai jaga kesehatan ya</Card>
        </AuthLayouts>
        /* <Navbar />
      <div className="flex flex-col justify-center items-center text-white bg-slate-700 min-h-screen">
        <h1 className="text-3xl font-bold mb-2 text-white-600">
          Lix Anonymous Message
        </h1>
        <br />
        <Card title="Say something">
          <FormPesan />
        </Card>
      </div> */
      }
    </>
  );
}

export default Pesan;
