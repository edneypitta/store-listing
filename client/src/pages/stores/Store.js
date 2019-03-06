import React from 'react'
import { getAvailability } from '../../selectors/schedule'
import Tag from './Tag'

const Store = ({ store, tagFilters, onTagClick }) => {
  return (
    <div className='store'>
      <h2>{store.name}</h2>
      <p>{store.description}</p>
      <span>{getAvailability(store.schedule)}</span>
      <div className='tags'>
        {store.tags.map(tag =>
          <Tag key={tag} tag={tag} tagFilters={tagFilters} onTagClick={onTagClick} />)}
      </div>
    </div>
  )
}

export default Store
