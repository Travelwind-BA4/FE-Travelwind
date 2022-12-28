import React from 'react';
import { render, screen, cleanup } from "@testing-library/react"
import { shallow } from 'enzyme';
import LoginPage from '../pages/Loginpage';

test("should render", () => {
    render(<LoginPage/>)
    const loginElement = screen.getByTestId('login-1');
    expect(loginElement).toBeInTheDocument()
})

// describe('LoginPage', () => {
//   it('renders correctly', () => {
//     const wrapper = shallow(<LoginPage />);
//     // expect(wrapper).toMatchSnapshot();
//   });
// });
