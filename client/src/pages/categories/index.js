import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CategoriesContext from '../../categories-context'
import CategoryIcon from './CategoryIcon'
import './categories.css'

export default () => {
  const categories = useContext(CategoriesContext)

  return (
    <div className='category-list'>
      {categories.map(category =>
        <div className='category' key={category.name}>
          <Link className='link' to={{ pathname: 'stores', search: `?category=${category.name}` }}>
            <CategoryIcon category={category} />
            <div className='label'>{category.label}</div>
          </Link>
        </div>
      )}
    </div>
  )
}