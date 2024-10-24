import "./CategoriNonveg.css";
import Data from "./../../../data/CategoriesNonvegdata";
import VegCard from "./../../../components/VegCard/VegCard";
import Navbar from "./../../../components/Navbar/Navbar";
import Footer from "./../../../components/Footer/Footer";
import { useEffect, useState } from "react";
import headerimg from "./non-veg header.jpg";

function CategoryNonveg() {
  const [filterdata, setFilteredData] = useState([...Data]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!searchText) {
      setFilteredData([...Data]);
      return;
    }
    const newData = Data.filter((dataObject) => {
      return dataObject.title.toLowerCase().includes(searchText);
    });

    setFilteredData([...newData]);
  }, [searchText]);

  return (
    <>
      <Navbar />
      <img src={headerimg} className="header-img" />
      <h1 className="head-title">Tasty Nonveg Food</h1>

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
        {filterdata.map((blogObject, i) => {
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

export default CategoryNonveg;
