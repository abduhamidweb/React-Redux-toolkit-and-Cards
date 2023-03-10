import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slice/checkmodal'
import { selectAllPosts } from '../slice/CardSlice'
import './style.css'
import Cards from '../card/Cards'
const NavbarTop = () => {
  const { modal } = useSelector((state) => state.counter)
  const dispach = useDispatch()
  const filterCards = useSelector(selectAllPosts)
  let filterCard = filterCards.length
    ? filterCards.filter((item) => item.saved == true)
    : null
  const renderCard = filterCard
    ? filterCard.map((item) => <Cards data={item} />)
    : null

  const handlermodal = () => {
    dispach(increment())
  }
  const handlerCloseModal = () => {
    dispach(increment())
  }
  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='container'>
          <button
            class='navbar-toggler'
            type='button'
            data-mdb-toggle='collapse'
            data-mdb-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i class='fas fa-bars'></i>
          </button>

          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <a class='navbar-brand mt-2 mt-lg-0' href='#'>
              <img
                src='https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp'
                height='15'
                alt='MDB Logo'
                loading='lazy'
              />
            </a>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Dashboard
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Team
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div class='d-flex align-items-center'>
            <a class='text-reset me-3' onClick={handlermodal}>
              <i class='fas fa-shopping-cart'></i>
              <span class='badge rounded-pill badge-notification bg-danger'>
                {filterCard.length}
              </span>
            </a>
            <div class='dropdown'>
              <a
                class='text-reset me-3 dropdown-toggle hidden-arrow'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-mdb-toggle='dropdown'
                aria-expanded='false'
              >
                <i class='fas fa-bell'></i>
                <span class='badge rounded-pill badge-notification bg-danger'>
                  1
                </span>
              </a>
              <ul
                class='dropdown-menu dropdown-menu-end'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <a class='dropdown-item' href='#'>
                    Some news
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Another news
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div class='dropdown'>
              <a
                class='dropdown-toggle d-flex align-items-center hidden-arrow'
                href='#'
                id='navbarDropdownMenuAvatar'
                role='button'
                data-mdb-toggle='dropdown'
                aria-expanded='false'
              >
                <img
                  src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                  class='rounded-circle'
                  height='25'
                  alt='Black and White Portrait of a Man'
                  loading='lazy'
                />
              </a>
              <ul
                class='dropdown-menu dropdown-menu-end'
                aria-labelledby='navbarDropdownMenuAvatar'
              >
                <li>
                  <a class='dropdown-item' href='#'>
                    My profile
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Settings
                  </a>
                </li>
                <li>
                  <a class='dropdown-item'>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className='container'>
        {modal ? (
          <div id='myModal' class='modal'>
            <div class='modal-content'>
              <span class='close' onClick={handlerCloseModal}>
                &times;
              </span>
              <div className='row'>
                {' '}
                {filterCard.length > 0 ? (
                  renderCard
                ) : (
                  <h3 className='text-center'>Sizda hali sotib olganiz yo'q</h3>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default NavbarTop
