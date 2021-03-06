import React from 'react'
import { shallow } from 'enzyme'
import CenterComponent from './CenterComponent'

describe('Center Component', () => {
  it('should render Test Component inside Center Component', () => {
    const TestComponent = () => <div id="test-component"></div>
    const component = shallow(
      <CenterComponent>
        <TestComponent></TestComponent>
      </CenterComponent>
    )

    expect(component.contains(<TestComponent />)).toBeTruthy()
  })
})
