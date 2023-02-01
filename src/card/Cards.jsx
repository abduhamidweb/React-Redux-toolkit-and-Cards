import React from 'react'
import './card.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllPosts } from './../slice/CardSlice'
import { toggledLike, removeDeleteCard, savedAdd } from './../slice/CardSlice'
const Cards = ({ data: { title, descrbtion, imgURL, like, id, saved } }) => {
//   const cards = useSelector(selectAllPosts)
// let filterCard =  cards.filter(item => item.saved == true)
  const dispatch = useDispatch()
  const addEventLike = (event) => {
    dispatch(toggledLike(event))
  }
  const removeCard = (event) => {
    dispatch(removeDeleteCard(event))
  }
  const savedAddToggle = (event) => {
    dispatch(savedAdd(event))
  }
  return (
    <>
      <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
        <div class='card'>
          <div className='reaction w-25 mx-auto my-2'>
            <span
              className='like'
              onClick={(e) => {
                addEventLike(e.target.getAttribute('data-id'))
              }}
            >
              {like ? (
                <i class='bi bi-heart-fill' data-id={id}></i>
              ) : (
                <i class='bi bi-heart' data-id={id}></i>
              )}
            </span>
            <span
              className='saved'
              onClick={(e) => {
                savedAddToggle(e.target.getAttribute('data-id'))
              }}
            >
              {saved ? (
                <i class='bi bi-cart-fill' data-id={id}></i>
              ) : (
                <i class='bi bi-cart' data-id={id}></i>
              )}
            </span>
            <span
              className='trash'
              onClick={(e) => {
                removeCard(e.target.getAttribute('data-id'))
              }}
            >
              <i class='bi bi-trash-fill' data-id={id}></i>
            </span>
          </div>
          <div
            class='bg-image hover-overlay ripple'
            data-mdb-ripple-color='light'
          >
            <img src={imgURL} class='img-fluid' />
            <a href='#!'>
              <div class='mask'></div>
            </a>
          </div>
          <div class='card-body'>
            <h5 class='card-title'>{title}</h5>
            <p class='card-text'>{descrbtion}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
