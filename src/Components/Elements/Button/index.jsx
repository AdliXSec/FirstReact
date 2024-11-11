const Button = (color) => {
    const { variant, name } = color;
    return (
      <button
        className={`${variant} text-white font-bold py-2 px-4 rounded`}
      >
        {name}
      </button>
    );
}

export default Button