const NextButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="w-[232px] h-14 flex justify-center items-center uppercase bg-(--color-primary) rounded-[12px] cursor-pointer"
      onClick={onClick}
    >
      <span className="font-medium text-[24px]">Suivant</span>
    </button>
  );
};

export default NextButton;
