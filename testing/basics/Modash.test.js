// We write the tests for the Modash library in
// this file in the Unit Testing chapter

import Modash from './Modash';

describe('Modash', ()=> {
    it('`truncate()`: truncates a string', ()=> {
        const string = 'there was one catch, and that was CATCH-22';
        expect(
            Modash.truncate(string, 19)).toEqual('there was one catch...');
        
    }); 

    it('no-ops if <= length', ()=> {
        expect(
            Modash.truncate(string, string.length)).toEqual(string);
        
    });


});