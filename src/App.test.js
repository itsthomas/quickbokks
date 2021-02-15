import { render } from '@testing-library/react';
import App from './App';

describe('The App component', () => {
  it('should render', () => {
    const { asFragment } = render(<App />);
    const html = asFragment();
    expect(html).toMatchSnapshot();
  });
});
