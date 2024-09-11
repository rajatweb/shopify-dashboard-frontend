import React from "react";

interface Props {
  children: any;
}

const CardWrapper: React.FC<Props> = ({ children }) => {
  return (
    <article
      className={`border-2 border-dashed border-[#a2a3a4] w-[352px]`}
    >
      {children}
    </article>
  );
};

export default CardWrapper;