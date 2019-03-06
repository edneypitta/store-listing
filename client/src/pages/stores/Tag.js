import React from 'react'
import Emoji from 'react-emoji-render'

const emojis = {
  'american': ':flag_us:',
  'fat': ':doughnut:',
  'healthy': ':running:',
  'breakfast': ':egg:',
  'indian': ':flag_in:',
  'coffee': ':coffee:',
  'watches': ':watch:',
  'chocolate': ':chocolate_bar:',
  'food': ':yum:',
  'burgers': ':hamburger:',
  'pizza': ':pizza:',
  'spicy': '🌶️',
  'italian': ':flag_it:',
  'vegan': ':seedling:'
}

export default function Tag({ tag, tagFilters, onTagClick }) {
  const filtered = tagFilters.includes(tag)

  return (
    <button
      key={tag}
      className={filtered ? 'filtered' : ''}
      title={filtered ? 'Click to remove filter' : 'Click to filter by tag'}
      value={tag}
      onClick={onTagClick}>
      <Emoji text={emojis[tag]} />
      <span className='tag-name'>{tag}</span>
    </button>
  )
}
