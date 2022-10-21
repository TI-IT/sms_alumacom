import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'
import { SearchContext } from '../App'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import ProductCard from '../components/ProductCard'
import Skeleton from '../components/PizzaBlock/Skeleton'

const Products = () => {
  const { categoryId, sort, currentPage } = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  const getProducts = async () => {
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sort.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      fetchProducts({
        order,
        sortBy,
        category,
        search
      })
    )

    window.scrollTo(0, 0)
  }
  //Загрузка один раз
  //https://docs.google.com/spreadsheets/d/1_0YvrlfzzMiQbCwgm22-VJnBI-QvFsn3vlLvfPaDiZ0/edit#gid=1701508152
  React.useEffect(() => {
    getProducts()
    window.scrollTo(0, 0) // при первой загрузке скролит вверх
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все товары</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.db.map(obj => <ProductCard key={obj.id} {...obj} />)}
      </div>
    </div>
  )
}

export default Products
