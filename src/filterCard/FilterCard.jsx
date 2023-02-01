import React from 'react'
import { selectAllPosts } from '../slice/CardSlice'
import { useSelector } from 'react-redux'
const FilterCard = () => {
  const filterCards = useSelector(selectAllPosts)
  let filterCard = filterCards.filter((item) => item.saved == true)
  return (
      <>
          
    </>
  )
}

export default FilterCard
