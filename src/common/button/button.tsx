interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
  rightAlign?: boolean;
}

export const Button = ({ buttonText, onClick, rightAlign }: ButtonProps) => {
  return (
    <div className={rightAlign ? 'align-right' : ''}>
      <button className='button' onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};
