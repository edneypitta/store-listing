import React from 'react'
import { isOpenNow } from '../../selectors/schedule'

export const getCategoryIcon = category => {
  const anyStoreOpen = category.stores
    .map(store => store.schedule)
    .some(isOpenNow)

  return anyStoreOpen ?
    category.openIcon :
    category.sleepIcon
}

const CategoryIcon = ({ category }) => {
  return (
    <div className='icon' title='Click to see stores'>
      <img src={getCategoryIcon(category)} alt='category icon' />
    </div>
  )
}

export default CategoryIcon
