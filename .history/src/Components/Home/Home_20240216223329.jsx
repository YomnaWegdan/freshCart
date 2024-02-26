import React from 'react'
import Products from '../Products/Products'
import MainSlider from '../Slider/MainSlider'
import CategoriesSlider from '../Slider/CategoriesSlider'

export default function Home() {
  return (
    <div>
      <MainSlider/>
      <CategoriesSlider/>
      <Products/>
    </div>
  )
}
