const Button = ({ add, quantity }) => {
  const handleClick = () => {
    add();
  };
  return (
    <div>
      <button
        disabled={quantity === 0}
        onClick={handleClick}
        className={`border flex items-center justify-center h-16 w-[200px] rounded-md  
      ${
        quantity === 0
          ? "bg-gray-200 cursor-not-allowed"
          : "bg-blue-500 cursor-pointer hover:bg-blue-600"
      }
      text-xl my-4 hover:scale-95 transition`}
      >
        Sepete Ekle
      </button>
      {quantity === 0 && (
        <p className="text-sm text-gray-500 mt-2">
          Ürün miktarı en az 1 olmalıdır.
        </p>
      )}
    </div>
  );
};

export default Button;
