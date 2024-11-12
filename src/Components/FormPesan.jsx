import Button from "./Elements/Button";
import { FormTextarea } from "./Elements/Input";

const FormPesan = () => {
  return (
    <form>
      <FormTextarea
        name="pesan"
        label="Pesan"
        placeholder="Masukkan Pesan"
        custom="text-white"
      />
      <div className="flex gap-x-3">
        <Button variant="bg-green-700">Kirim</Button>
      </div>
    </form>
  );
};

export default FormPesan;
