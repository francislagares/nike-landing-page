interface Props {
  imgUrl: {
    thumbnail: string;
    bigShoe: string;
  };
  changeBigShoeImage: (url: string) => void;
  bigShoeImg: string;
}

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }: Props) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${
        bigShoeImg === imgUrl.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40'>
        <img
          src={imgUrl.thumbnail}
          alt='shoe colletion'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
