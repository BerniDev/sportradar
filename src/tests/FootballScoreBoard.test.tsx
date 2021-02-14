import React from 'react';
import { render, screen } from '@testing-library/react';
import FootballWorldCup from '@pages/FootballScoreBoard.page';
import '@testing-library/jest-dom'



describe('Football Score',()=>{

    // Start a game. When a game starts, it should capture (being initial score 0 – 0):
    //     a. Home team
    //     b. Away team
    it('Start Game: Initial Score',()=>{
        render(<FootballWorldCup/>);
        
        /**@desc a. Home team */
        expect(
            screen.getByRole('heading',{level: 4, name: /Home Team/})
        ).toBeInTheDocument();

        /**@desc b. Away team */
        expect(
            screen.getByRole('heading',{level: 4, name: /Away Team/})
        ).toBeInTheDocument();
        
        /**@desc score 0 – 0 */
        expect(
            screen.queryAllByRole('heading',{level: 1, name: /0/})
        ).toHaveLength(2);
    })
})