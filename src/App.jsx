import Button from "./Components/Elements/Button";
import Card from "./Components/Elements/card";
import FormInput from "./Components/Elements/Input";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white bg-slate-700 min-h-screen">
        <h1 className="text-3xl font-bold mb-2 text-white-600">Lixs in here</h1>
        <br />
        <Card title="Hello Adli">
          <form>
            <FormInput
              type="text"
              placeholder="pesan"
              name="pesan"
              label="pesan"
              custom="text-white"
            />
          </form>
          <div className="flex gap-x-3">
            <Button variant="bg-green-700">Kirim</Button>
          </div>
        </Card>
      </div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
          <p className="font-medium text-slate-500 mb-8">
            Enter your email and password
          </p>
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
        </div>
      </div>
    </>
  );
}

export default App;
