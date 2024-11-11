const Button = (color) => {
  const { variant, children } = color;
  return (
    <button className={`${variant} text-white font-bold py-2 px-4 rounded`}>
      {children}
    </button>
  );
};

export default Button;
