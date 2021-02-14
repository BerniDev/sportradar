import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';


it('Hello world! test',()=>{
    render(<App />);
    const test = screen.queryByText(/Hello world!/);
    expect(test).toBeInTheDocument();
})
