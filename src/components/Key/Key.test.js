import React from 'react';
import ReactDom from 'react-dom';
import Key from './Key';

import { render, cleanup } from '@testing-library/react';

afterEach(() => cleanup());

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<Key></Key>, div);
});

it("renders 1", () => {
    const { getByTestId } = render(<Key buttonKey={1}></Key>);
    expect(getByTestId('button').textContent).toBe('1');
});

it("renders +", () => {
    const { getByTestId } = render(<Key buttonKey={'+'}></Key>);
    expect(getByTestId('button').textContent).toBe('+');
});