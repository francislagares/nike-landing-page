interface Props {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
}: Props) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'border-coral-red bg-coral-red text-white'
      } px-7 py-4 font-montserrat text-lg leading-none `}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt='Arrow Right Icon'
          className='ml-2 h-5 w-5 rounded-full'
        />
      )}
    </button>
  );
};

export default Button;
