interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
}

export const Button = ({ buttonText, onClick }: ButtonProps) => {
  return (
    <div className='align-right'>
      <button className='button' onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};
