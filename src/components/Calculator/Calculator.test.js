import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator'

describe("Calculation component", () => {
    test("should render", () => {
      const { asFragment } = render(<Calculator/>);

      const html = asFragment();

      expect(html).toMatchSnapshot();
    });

    test("Total = commission + other income + construction + icome from sales", () => {

      render(<Calculator/>);

      screen.queryAllByTestId('total-part').forEach(element => {
        fireEvent.change(element, { target: { value: '5' } })
      });

      expect(screen.queryByTestId('total-value').innerHTML).toEqual(`£20`);
    });
});
