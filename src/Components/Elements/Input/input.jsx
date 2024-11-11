const Input = (Type) => {
    const { type, placeholder } = Type;
    return (
      <input className="text-black" type={`${type}`} placeholder={`${placeholder}`} />
    );
}

export default Input