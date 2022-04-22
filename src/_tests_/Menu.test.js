import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'

import Menu from '../components/Menu/Menu';

describe('Menu', () => {

    it('should render the Menu component', () => {
        const { getByTestId } = render(<Menu />)

        expect(getByTestId('menu-main')).toBeInTheDocument();
    })


    // The rest of this component is tested with Cypress
})