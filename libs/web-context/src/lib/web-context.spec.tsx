import { render } from '@testing-library/react';

import WebContext from './web-context';

describe('WebContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebContext />);
    expect(baseElement).toBeTruthy();
  });
});
