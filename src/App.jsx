import Card from "./Components/Elements/card";
import FormLogin from "./Components/FormLogin";
import FormPesan from "./Components/FormPesan";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white bg-slate-700 min-h-screen">
        <h1 className="text-3xl font-bold mb-2 text-white-600">
          Lix Anonymous Message
        </h1>
        <br />
        <Card title="Say something">
          <FormPesan />
        </Card>
      </div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
          <p className="font-medium text-slate-500 mb-8">
            Enter your email and password
          </p>
          <FormLogin />
        </div>
      </div>
    </>
  );
}

export default App;
