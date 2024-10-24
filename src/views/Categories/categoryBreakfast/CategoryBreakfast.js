// import "./CategoriesVeg.css"
import Data from "./../../../data/CategoriesBreakfastdata";
import VegCard from "./../../../components/VegCard/VegCard";
import headerimg from "./header-img.jpg";
import Navbar from "./../../../components/Navbar/Navbar";
import Footer from "./../../../components/Footer/Footer";
import { useEffect, useState } from "react";

function CategoriesBreakfast() {
  const [filteredData, setFilteredData] = useState([...Data]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!searchText) {
      setFilteredData([...Data]);
      return;
    }

    const newData = Data.filter((dataObject) => {
      return dataObject.title.toLowerCase().includes(searchText);
    });

    console.log(searchText, newData);

    setFilteredData([...newData]);
  }, [searchText]);

  return (
    <>
      <Navbar />
      <img src={headerimg} className="header-img" />
      <span className="head-title">Rise And Dine its Breakfast Time.</span>

      <div className=" search-container">
        <input
          type="text"
          placeholder="Search.."
          className="input-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>

      <div className="veg-container">
        {filteredData.map((blogObject, i) => {
          const { id, title, image, description, time, categories } =
            blogObject;

          return (
            <VegCard
              title={title}
              image={image}
              description={description}
              time={time}
              id={id}
              categories={categories}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default CategoriesBreakfast;
