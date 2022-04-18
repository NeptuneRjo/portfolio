import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import Hero from '../components/Hero/Hero';
import { ParallaxProvider } from 'react-scroll-parallax';

describe('Hero', () => {

    const component = () => {
        return {
            ...render(
                <ParallaxProvider>
                    <Hero />
                </ParallaxProvider>
            )
        }
    }

    it('should render the Hero component', () => {
        const { getByTestId } = component();

        expect(getByTestId('hero-component')).toBeInTheDocument();
        expect(getByTestId('hero-component')).toBeVisible();
    })

    it('should render the text', () => {
        const { getByTestId } = component();

        expect(getByTestId('hero-header-name')).toBeVisible();
        expect(getByTestId('hero-header-name')).toBeInTheDocument();
    })

    it('should render the text', () => {
        const { getByTestId } = component();

        expect(getByTestId('hero-header-content')).toBeVisible();
        expect(getByTestId('hero-header-content')).toBeInTheDocument();
    })
})