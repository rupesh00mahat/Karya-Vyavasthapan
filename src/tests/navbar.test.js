import {render, screen} from "@testing-library/react";
import Navbar from '../components/navbar';
import "@testing-library/jest-dom";

test('navbar test', ()=>{
    render(<Navbar/>);
    const text = screen.getByText(/My workspace/i);
    expect(text).toBeInTheDocument();
})