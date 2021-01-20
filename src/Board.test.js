import Board from './Board';
import { render, fireEvent } from '@testing-library/react';

test('should get re-rendered on each click, with Xs and Os appearing on alternating clicks',
() => {
    const board = render(<Board/>);
    const buttons = board.queryAllByRole('button');

    var i;
    for(i = 0; i < 9; i++){
        fireEvent.click(buttons[i]);
    }
    expect(buttons[0].innerHTML).toBe('X');
    expect(buttons[1].innerHTML).toBe('O');
    expect(buttons[2].innerHTML).toBe('X');
    expect(buttons[3].innerHTML).toBe('O');
    expect(buttons[4].innerHTML).toBe('X');
    expect(buttons[5].innerHTML).toBe('O');
    expect(buttons[6].innerHTML).toBe('X');
    expect(buttons[7].innerHTML).toBe('O');
    expect(buttons[8].innerHTML).toBe('X');

})

test('should show next player as X or O depending on whose turn it is', () => {
    const board = render(<Board/>);
    const buttons = board.queryAllByRole('button');
    const nextPlayer = board.getByText('Next Player: X')


    expect(nextPlayer.textContent).toEqual('Next Player: X');

    fireEvent.click(buttons[0]);

    expect(nextPlayer.textContent).toEqual('Next Player: O');

    fireEvent.click(buttons[1]);

    expect(nextPlayer.textContent).toEqual('Next Player: X');
})