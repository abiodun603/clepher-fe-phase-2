export interface ReactionButtonProps {
  name: string;
  imageUrl: string;
  onClick: (name: string, imageUrl: string) => void; 
}

function ReactionButton({ name, imageUrl, onClick }: ReactionButtonProps) {
  const handleClick = () => {
    onClick(name, imageUrl);;
  };

  return (
    <button
      className={`transition-transform duration-200 ease-in-out transform scale-80 hover:scale-125 hover:translate-y-[-5px]`}
      onClick={handleClick}
    >
      <img src={imageUrl} alt={name} className="w-14 h-14" />
    </button>
  );
}

export default ReactionButton;