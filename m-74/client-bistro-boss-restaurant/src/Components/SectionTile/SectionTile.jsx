
const SectionTile = ({title,header}) => {
    return (
      <div className="mt-6  text-center">
        <h2 className=" mb-3 font-semibold text-xl text-yellow-600 ">
          --- {title} ---
        </h2>
        <h4 className="border-t border-b w-5/12 mx-auto pb-3 mb-12 text-yellow text-yellow font-semibold uppercase text-4xl">
          {header}
        </h4>
      </div>
    );
};

export default SectionTile;