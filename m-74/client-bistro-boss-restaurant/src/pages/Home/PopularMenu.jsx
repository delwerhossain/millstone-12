import { useEffect, useState } from "react";
import SectionTile from "../../Components/SectionTile/SectionTile";
import MenuItems from "../common/MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        {
          const popularMenu = data.filter(
            (menu) => menu.category === "popular"
          );
          setMenu(popularMenu);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="my-12">
      <SectionTile title={"Popular Items"} header={"From Our Menu"} />
      <div className=" md:w-10/12 mx-auto grid md:grid-cols-2 gap-10">
        {menu.map((items) => (
          <MenuItems key={items._id} items={items}></MenuItems>
        ))}
      </div>
      <div className="grid my-6">
        <button className="btn btn-outline mx-auto text-center border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
