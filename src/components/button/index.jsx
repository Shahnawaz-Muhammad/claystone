import { CgArrowLongRight } from "react-icons/cg";

const Button = (props) => {
  return (
    <button
      type="button"
      className={`text-[16px] ${props.textColor} ${props.hoverEffects} leading-[26px] uppercase ${props.border} flex items-center justify-center gap-[18px] rounded-[15px] text-center md:${props.width} px-5 md:px-0 h-[80px]`}
    >
      {props.text}
      <CgArrowLongRight />
    </button>
  );
};

export default Button;
