import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';


describe('App component test', ()=>{
  test('renders "click to see the text"', () => {
    //3A
  
    //A1: Arrange
    render(<App />);
  
    //A2: Act
    // no logic
  
    //A3: Assert
    const linkElement = screen.getByText('click to see the text')
      expect(linkElement).toBeInTheDocument();
  });

  test('clicks and shows the "I am visible I am the text"', ()=>{
    render(<App />)

    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)

    const textElement = screen.getByText('I am visible I am the text')
    expect(textElement).toBeInTheDocument()

  })

  test('clicks and will not show "click to see the text"', ()=>{
    render(<App />)//arrange

    const buttonElement = screen.getByRole('button')//act
    fireEvent.click(buttonElement)//act

    const element = screen.queryByText('click to see the text')//assert
    expect(element).not.toBeInTheDocument()//assert


  })

})



