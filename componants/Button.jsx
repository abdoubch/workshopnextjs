const Button = ({ text, href }) => {
  return (
    <a
      href={href}
      className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition"
    >
      {text}
    </a>
  );
};

export default Button;
