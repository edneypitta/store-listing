import React from 'react'
import { render } from 'enzyme'
import Store from './Store'

describe('Store', () => {
  it('renders without crashing', () => {
    const store = { tags: ['fat'] }
    const component = render(
      <Store store={store} tagFilters={[]} />)

    expect(component).toMatchSnapshot()
  })
})

