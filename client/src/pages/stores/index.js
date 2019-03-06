import React, { useContext, useState } from 'react'
import CategoriesContext from '../../categories-context'
import { isOpenNow } from '../../selectors/schedule'
import Store from './Store'
import './stores.css'

const sortByOpen = (a, b) => isOpenNow(b.schedule) - isOpenNow(a.schedule)

function filterByTags(tagFilters) {
  return store =>
    !tagFilters.length || tagFilters.every(tag => store.tags.includes(tag))
}

function onTagClick(tagFilters, setTagFilters) {
  return event => {
    const tag = event.target.value
    tagFilters.includes(tag) ?
      setTagFilters([...tagFilters.filter(t => t !== tag)]) :
      setTagFilters([...tagFilters, tag])
  }
}

export default ({ location }) => {
  const categories = useContext(CategoriesContext)
  const [tagFilters, setTagFilters] = useState([])

  const category = new URLSearchParams(location.search).get('category')
  const { stores } = categories.find(c => c.name === category)

  return (
    <div className='stores'>
      {stores
        .filter(filterByTags(tagFilters))
        .sort(sortByOpen)
        .map(store =>
          <Store
            key={store.id}
            store={store}
            tagFilters={tagFilters}
            onTagClick={onTagClick(tagFilters, setTagFilters)} />)}
    </div>
  )
}


