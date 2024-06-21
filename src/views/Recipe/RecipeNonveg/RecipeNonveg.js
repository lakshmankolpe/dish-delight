import React, { useEffect, useState } from 'react'
import "./RecipeNonveg.css"
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import NonVegDataCard from '../../../data/CategoriesNonvegdata'
import HolidaySpecials from '../../../components/HolidayRecipes/HolidaysRecipe'

function RecipeNonveg() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [text, setText] = useState('')
useEffect(()=>{
  
}, [text])

  const { id } = useParams()

  const selectedData = NonVegDataCard.find((dataObject) => dataObject.id === id)

  const handleSuccessClick = () => {
    Swal.fire({
      icon: 'success',
      title: "Thank you for your Review. It has been sent",
      timer: 2500,
    })

  }

  return (<>
    <div>
      <Navbar />
    </div>

    <div className='recipe-body '>
      <h1 className='title text-center'>{selectedData.title}</h1>
      <img src={selectedData.image} className="recipe-img mx-auto d-block rounded-3 img-thumbnail mt-1" />
      <div className='duration text-center mt-3 '>{selectedData.up}</div>
      <h4 className='recipe-description px-5'>{selectedData.description}</h4>
      <h2 className='heading text-center mt-3 mx-3 py-2 rounded-4 bg-secondary '>{selectedData.ingredientTitle} </h2>

      <div className='ingredients-container '>
        <div className='ingredient-list p-4 m-4 rounded-4 bg-secondary '>

          {selectedData.ingredients.map((element, i) =>
            <ul key={i}>
              <b><li className='ingrients '>{element}</li></b>
            </ul>
          )}
        </div>
        <img src={selectedData.ingredientImg} className='ingredient-img rounded-4 m-4 img-thumbnail' />
      </div>

      <h2 className='heading text-center mt-5 mx-3 py-2 rounded-4 bg-secondary'> {selectedData.recipeName} PROCESS</h2>

      <div className='recipe h5 p-5'>
        {selectedData.steps.map((element, i) => {

          return <div className='steps m-1'>
            <ul><li >{element}</li></ul>
          </div>
        })}
      </div>

      <h2 className='heading text-center'>Live a Review</h2>

      <div className='review-page w-50 p-5 rounded-3 bg-secondary'>
        <div className='input-div mb-4 px-4'>
          <h5>Review</h5>
          <input type='text'
            placeholder='Comment'
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
            className=' input-1 p-2 pb-6  pb-5 ' />
        </div>

        <div className='input-div mb-4 px-4'>
          <h5>Name</h5>
          <input type='text'
            placeholder='Enter Name'
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
            className=' input-1 p-2 ' />
        </div>

        <div className='button d-flex justify-content-center'>
          <button onClick={handleSuccessClick} type='submit' className='button bg-black text-white mt-4 py-1 px-5 rounded-3'>Submit</button>
        </div>

      </div>

      <Footer />
    </div>

  </>
  )
}

export default RecipeNonveg
