import React from 'react'
import sec from '../assets/img/empty-cart.png'

const CartEmpty = () => {
  return (
    <>
      <div class="cart cart--empty">
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src="/static/media/empty-cart.db905d1f4b063162f25b.png" alt="Empty cart" />
        <a class="button button--black" href="/">
          <span>Вернуться назад</span>
        </a>
      </div>
    </>
  )
}

export default CartEmpty
