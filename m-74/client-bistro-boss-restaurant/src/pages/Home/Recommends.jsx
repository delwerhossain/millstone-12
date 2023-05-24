import { useEffect, useState } from "react";
import SectionTile from "../../Components/SectionTile/SectionTile";
import RecommendCard from "./RecommendCard";

const Recommends = () => {
    const menu = [
      {
        _id: "642c155b2c4774f05c36eeaa",
        name: "Haddock",
        recipe:
          "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
        image:
          "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
        category: "salad",
        price: 14.7,
      },
      {
        _id: "642c155b2c4774f05c36eeb9",
        name: "Haddock",
        recipe:
          "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
        image:
          "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
        category: "drinks",
        price: 14.7,
      },
      {
        _id: "642c155b2c4774f05c36ee7c",
        name: "Escalope de Veau",
        recipe:
          "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
        image:
          "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg",
        category: "popular",
        price: 14.5,
      }
    ];
  const [cards, setCards] = [useState([])];
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        {
          const popularMenu = data.filter(
            (menu) => menu.category === "popular"
          );
          setCards(popularMenu);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(cards);
  return (
    <div>
      <SectionTile
        title={"Should Try"}
        header={"CHEF RECOMMENDS"}
      ></SectionTile>
      <div
        className="grid w-10/12 mx-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-self-center items-center 
      "
      >
        {menu.map((card) => (
          <RecommendCard key={card._id} card={card}></RecommendCard>
        ))}
      </div>
    </div>
  );
};

export default Recommends;
