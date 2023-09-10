interface Props {
  label: string;
  iconUrl: string;
}

const Button = ({ label, iconUrl }: Props) => {
  return (
    <button className='flex items-center justify-center gap-2 rounded-full border border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white'>
      {label}
      <img
        src={iconUrl}
        alt='Arrow Right Icon'
        className='ml-2 h-5 w-5 rounded-full'
      />
    </button>
  );
};

export default Button;
7;
