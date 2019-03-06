import React from 'react'
import { render } from 'enzyme'
import CategoriesPage from './index'
import CategoriesContext from '../../categories-context'
import { mockDate } from '../../setupTests'
import { StaticRouter } from 'react-router-dom'

describe('CategoriesPage', () => {
  beforeEach(() => {
    mockDate('2019-03-05T12:00:00.977Z')
  })

  it('renders without crashing', () => {
    const category = { stores: [] }
    const component = render(
      categoriesPageComponent(category))

    expect(component).toMatchSnapshot()
  })
})

function categoriesPageComponent(category) {
  return (
    <CategoriesContext.Provider value={[category]}>
      <StaticRouter>
        <CategoriesPage />
      </StaticRouter>
    </CategoriesContext.Provider>)
}

