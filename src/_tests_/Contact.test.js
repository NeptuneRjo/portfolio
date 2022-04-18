import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from "react";

import Contact from '../components/Contact/Contact';

describe('Contact', () => {

    const submitForm = jest.fn();

    it('should display the contact content', () => {
        const { getByTestId } = render(<Contact />)

        expect(getByTestId('contact')).toBeInTheDocument();
        expect(getByTestId('contact')).toBeVisible();
    })

    it('should display the contact header correctly', () => {
        const { getByTestId } = render(<Contact />)

        expect(getByTestId('contact-header')).toBeInTheDocument()
        expect(getByTestId('contact-header')).toBeVisible();
        expect(getByTestId('contact-header')).toHaveTextContent('Contact')
    })

    it('should display the name field of the form', () => {
        const { getByTestId } = render(<Contact />)

        expect(getByTestId('name-field')).toBeInTheDocument();
        expect(getByTestId('name-field')).toBeVisible();
    })

    it('should display the email field of the form', () => {
        const { getByTestId } = render(<Contact />)

        expect(getByTestId('email-field')).toBeInTheDocument();
        expect(getByTestId('email-field')).toBeVisible();
    })

    it('should display the message field of the form', () => {
        const { getByTestId } = render(<Contact />)

        expect(getByTestId('message-field')).toBeInTheDocument();
        expect(getByTestId('message-field')).toBeVisible();
    })

    it('should display the contact info', () => {
        const { getByTestId } = render(<Contact />)

        expect(getByTestId('contact-info')).toBeInTheDocument();
        expect(getByTestId('contact-info')).toBeVisible();
    })
})