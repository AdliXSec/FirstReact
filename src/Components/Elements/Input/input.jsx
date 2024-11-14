const Input = (Type) => {
  const { type, placeholder, name } = Type;
  return (
    <input
      className="text-black"
      type={`${type}`}
      placeholder={`${placeholder}`}
      name={name}
      id={name}
    />
  );
};

export default Input;
