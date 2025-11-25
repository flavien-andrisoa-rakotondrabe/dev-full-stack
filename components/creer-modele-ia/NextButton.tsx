const NextButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="w-[200px] h-12 flex justify-center items-center uppercase bg-(--color-primary) rounded-[10px] cursor-pointer"
      onClick={onClick}
    >
      <span className="font-medium text-[20px]">Suivant</span>
    </button>
  );
};

export default NextButton;
