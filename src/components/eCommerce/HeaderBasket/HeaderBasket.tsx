import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const HeaderBasket = () => {
  return (
    <div className="relative top-1 left-1 cursor-pointer w-[40px] h-[40px]">
      <ShoppingCartIcon className="text-main" />
      <div className="absolute bottom-6 left-5.5 text-sm font-bold self-center">0</div>
    </div>
  );
};

export default HeaderBasket;
