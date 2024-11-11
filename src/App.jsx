import Button from "./Components/Elements/Button";
import Input from "./Components/Elements/Input/input";
import Card from "./Components/Elements/card";

function App() {
  return (
    <div className="flex flex-col justify-center items-center text-white bg-slate-700 min-h-screen">
      <div>Its Dlixs -</div>
      <div>Hello dlixs</div>
      <br />
      <Card title="Hello Adli">
        <form>
          <Input type="text" placeholder="text input" />
        </form>
        <br />
        <div className="flex gap-x-3">
          <Button variant="bg-red-700" name="Red" />
          <Button variant="bg-blue-700" name="Blue" />
        </div>
      </Card>
    </div>
  );
}

export default App;