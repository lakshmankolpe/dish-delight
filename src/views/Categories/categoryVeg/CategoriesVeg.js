import "./CategoriesVeg.css";
import VegCard from "./../../../components/VegCard/VegCard";
import headerimg from "./header-img.jpg";
import Navbar from "./../../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Data from "./../../../data/CategoriesVesdata";
import Footer from "./../../../components/Footer/Footer";

function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search.."
        className="input-box"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

function CategoriesVeg() {
  const [filteredData, setFilteredData] = useState([...Data]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    if (!searchText) {
      setFilteredData([...Data]);
      return;
    }

    const newData = Data.filter((dataObject) =>
      dataObject.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredData([...newData]);
  }, [searchText]);

  return (
    <>
      <Navbar />
      <img src={headerimg} className="header-img" alt="Header" />
      <span className="head-title">Veg Delicious Food</span>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      <div className="veg-container">
        {filteredData.map((blogObject) => {
          const { id, title, image, description, time, categories } = blogObject;

          return (
            <VegCard
              key={id}
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

export default CategoriesVeg;
export {SearchBar}
