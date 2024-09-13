interface Props {
  children: React.ReactNode;
}

const CardWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="p-5">
      <article className={`border-2 border-dashed border-[#a2a3a4] w-[352px]`}>
        {children}
      </article>
    </div>
  );
};

export default CardWrapper;
