import Button from "./Elements/Button";
import FormInput, { FormTextarea } from "./Elements/Input";

const FormPesan = () => {
  return (
    <form>
      <FormInput
        type="text"
        placeholder="nama"
        name="nama"
        label="nama"
        custom="text-white mt-5"
      />
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
