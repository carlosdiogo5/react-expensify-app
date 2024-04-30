import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage.js";

test('Should render NotFound correctly', () => {
  const wrapper = shallow(<NotFoundPage></NotFoundPage>);
  expect(wrapper).toMatchSnapshot();
});