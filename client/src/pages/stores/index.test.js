import React from 'react'
import { render } from 'enzyme'
import StoresPage from './index'
import CategoriesContext from '../../categories-context'

describe('StoresPage', () => {
  it('renders without crashing', () => {
    const category = {
      name: 'gifts',
      stores: [{ tags: [] }]
    }
    const component = render(
      storesPageComponent(category))

    expect(component).toMatchSnapshot()
  })
})

function storesPageComponent(category) {
  return (
    <CategoriesContext.Provider value={[category]}>
      <StoresPage location={{ search: 'category=gifts' }} />
    </CategoriesContext.Provider>)
}

