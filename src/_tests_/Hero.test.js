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

    it('should render the hero text', () => {
        const { getByTestId } = component();

        expect(getByTestId('hero-header-name')).toBeVisible();
        expect(getByTestId('hero-header-name')).toBeInTheDocument();
    })

    it('should render the hero text', () => {
        const { getByTestId } = component();

        expect(getByTestId('hero-header-content')).toBeVisible();
        expect(getByTestId('hero-header-content')).toBeInTheDocument();
    })

    it('should render the Parallax banner', () => {
        const { getByTestId } = component();

        // 'layer-0' is the test ID used for the banner by the Parallax
        expect(getByTestId('layer-0')).toBeInTheDocument();
        expect(getByTestId('layer-0')).toBeVisible();
    })

    it('should render the photo attribute', () => {
        const { getByTestId } = component();

        expect(getByTestId('header-tag')).toBeInTheDocument();
        expect(getByTestId('header-tag')).toBeVisible();
    })

    it('should be using the correct source for the name link', () => {
        const { getByTestId } = component();

        const hyperLink = 'https://unsplash.com/@laup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'

        expect(getByTestId('header-tag-name')).toBeInTheDocument();
        expect(
            getByTestId('header-tag-name')
        ).toHaveAttribute('href', hyperLink);
    })

    it('should be using the correct source for the website link', () => {
        const { getByTestId } = component();

        const hyperLink = 'https://unsplash.com/s/photos/space-background?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'

        expect(getByTestId('header-tag-website')).toBeInTheDocument();
        expect(
            getByTestId('header-tag-website')
        ).toHaveAttribute('href', hyperLink);
    })

    it('should render both links in the header', () => {
        const { getByTestId } = component();

        expect(getByTestId('header-tag-website')).toBeVisible();
        expect(getByTestId('header-tag-name')).toBeVisible();
    })
})