type ButtonProps = {
  className: string;
  onClick: () => void;
  text: string;
};

function CustomButton(props: ButtonProps) {
  const { className, onClick, text } = props;

  return (
    <button className={className} onClick={() => onClick()}>
      {text}
    </button>
  );
}

export default CustomButton;
