const Card = (props) => {
  const { title, children } = props;
  return (
    <div className="flex flex-col justify-center items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        {children}
      </div>
    </div>
  );
};

export default Card;
