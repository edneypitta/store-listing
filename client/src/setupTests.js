import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const RealDate = Date
export const mockDate = isoDate =>
  global.Date = class extends RealDate {
    constructor() {
      return new RealDate(isoDate)
    }
  }