const Label = (props) => {
  const { children, htmlFor, custom = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium ${custom}`}
    >
      {children}
    </label>
  );
};

export default Label;
