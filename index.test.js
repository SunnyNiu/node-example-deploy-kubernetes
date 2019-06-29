describe('randomTest', ()=> {
    it('case1',() =>{
        const request = require('request');
        request('http://localhost:3000', function (error, response, body) {
            expect(body).toEqual("Hello World");
        })
    });
    it('case2', ()=>{
        expect(true).toEqual(true);
    });
})
