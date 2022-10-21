import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'
import { SearchContext } from '../App'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import ProductCard from '../components/ProductCard'
import Skeleton from '../components/PizzaBlock/Skeleton'

const Products = () => {
  const { items, status } = useSelector(state => state.products)
  console.log(items.products)
  const dispatch = useDispatch()

  const getProducts = async () => {
    dispatch(fetchProducts())

    window.scrollTo(0, 0)
  }
  //Загрузка один раз
  //https://docs.google.com/spreadsheets/d/1_0YvrlfzzMiQbCwgm22-VJnBI-QvFsn3vlLvfPaDiZ0/edit#gid=1701508152
  React.useEffect(() => {
    getProducts()
  }, [])

  const products = items.map(obj => <ProductCard key={obj.id} {...obj} />)
  const sceletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все товары</h2>
      <div className="content__items">
        {status === 'error' ? (
          <div className="content__error-info">
            <h2>Произошла Ошибка</h2>
            <p>Не удалось получить товары, попробуйте повторить попытку позже</p>
          </div>
        ) : (
          <div className="content__items">{status === 'loading' ? sceletons : products}</div>
        )}
      </div>
    </div>
  )
}

export default Products
