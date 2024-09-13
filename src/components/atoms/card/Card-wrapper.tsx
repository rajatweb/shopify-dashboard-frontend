import React from "react";
import { useDroppable } from "@dnd-kit/core";
interface Props {
  children: React.ReactNode;
}

const CardWrapper: React.FC<Props> = ({ children }) => {
  const { setNodeRef } = useDroppable({
    id: "card-wrapper", // give it a unique ID
  });
  return (
    <div className="p-5" ref={setNodeRef}>
      <article  className={`border-2 border-dashed border-[#a2a3a4] w-[352px]`}>
        {children}
      </article>
    </div>
  );
};

export default CardWrapper;
