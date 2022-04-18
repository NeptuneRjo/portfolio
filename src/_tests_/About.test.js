import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'

import About from '../components/About/About';

describe('About', () => {

    it('should render the About component', () => {
        const { getByTestId } = render(<About />)

        expect(getByTestId('about-header')).toBeInTheDocument();
    })

    it('should render the correct header text', () => {
        const { getByTestId } = render(<About />)

        expect(getByTestId('about-header')).toBeVisible();
        expect(getByTestId('about-header')).toHaveTextContent('About Me')
    })

    it('should render the skills section', () => {
        const { getByTestId } = render(<About />)

        expect(getByTestId('about-skills')).toBeInTheDocument()
        expect(getByTestId('about-skills')).toBeVisible();
    })

    it('should render each skill in the skills section', () => {
        const { getAllByTestId } = render(<About />)
        const skills = ['React', 'Redux', 'CSS3', 'HTML5', 'Jest', 'Sass']

        getAllByTestId('skill-item').forEach((skill, index) => {
            expect(skill).toBeInTheDocument()
            expect(skill).toHaveTextContent(skills[index])
        })
    })

    it('should display the about-section button', () => {
        const { getByTestId } = render(<About />)

        expect(getByTestId('hire-button')).toBeInTheDocument();
        expect(getByTestId('hire-button')).toHaveTextContent('HIRE ME')
    })

    it('should display the main content for the about section', () => {
        const { getByTestId } = render(<About />)

        expect(getByTestId('about-content')).toBeInTheDocument();
        expect(getByTestId('about-content')).toBeVisible();
    })

    it('should have the correct alt tag', () => {
        const { getByTestId } = render(<About />)

        expect(getByTestId('about-image')).toBeInTheDocument();
        expect(getByTestId('about-image')).toBeVisible();

        expect(getByTestId('about-image')).toHaveAttribute('alt', 'image of space')
    })
    
})