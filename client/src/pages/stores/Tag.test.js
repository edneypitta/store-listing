import React from 'react'
import { render } from 'enzyme'
import Tag from './Tag'

describe('Store', () => {
  it('renders without crashing', () => {
    const component = render(
      <Tag tag='fat' tagFilters={[]} />)

    expect(component).toMatchSnapshot()
  })

  it('renders when filtered', () => {
    const component = render(
      <Tag tag='fat' tagFilters={['fat']} />)

    expect(component).toMatchSnapshot()
  })
})