
const RecommendCard = ({ card }) => {
  const { name, recipe, image,  price } = card;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}!</h2>
        <p>{recipe}</p>
        <p className="font-semibold ">{price}$</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
