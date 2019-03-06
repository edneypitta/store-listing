import React from 'react'
import { render } from 'enzyme'
import { mockDate } from '../../setupTests'
import CategoryIcon from './CategoryIcon'

describe('CategoryIcon', () => {
  beforeEach(() => {
    mockDate('2019-03-05T12:00:00.977Z')
  })

  it('renders without crashing', () => {
    const category = {
      stores: [{ schedule: [{ day: 1, open: '11:00', close: '13:00' }] }]
    }
    const component = render(<CategoryIcon category={category} />)

    expect(component).toMatchSnapshot()
  })

  it('renders with open icon', () => {
    const category = {
      openIcon: 'openIcon',
      stores: [{ schedule: [{ day: 1, open: '11:00', close: '13:00' }] }]
    }
    const component = render(<CategoryIcon category={category} />)

    expect(component).toMatchSnapshot()
  })

  it('renders with sleep icon', () => {
    const category = { sleepIcon: 'sleepIcon', stores: [] }
    const component = render(<CategoryIcon category={category} />)

    expect(component).toMatchSnapshot()
  })
})

