
    import { categoriesData } from "../../data/HomeData";
    import CategoriesSection from "../CategoriesSection/CategoriesSection";
  
    
    
    function HomeCategories() {
        return (
            <>
                <h2 className="bg-secondary text-white mx-auto my-3 text-black px-1 py-2 rounded text-center w-50 ">
                    Categories Section
                </h2>
                <div className="d-flex flex-wrap justify-content-evenly align-items-center">
                    {categoriesData.map((category, index) => (
                        <CategoriesSection
                            key={index}
                            id = {category.id}
                            name={category.name}
                            image={category.image}  
                            timing={category.timing}
                        />
                    ))}
                </div>

              
            </>
        );
    }



    export default HomeCategories 



