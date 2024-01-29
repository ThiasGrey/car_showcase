'use client'

import { CustonButtonProps } from "@/types";

const CustonButton = ({containerStyle, handelClick, title}:CustonButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handelClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  );
};

export default CustonButton;
