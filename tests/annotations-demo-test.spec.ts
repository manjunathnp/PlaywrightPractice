// Annotations Demo 

import {test, expect} from '@playwright/test'

test.describe.configure({mode: 'serial'});
test.describe('Annotations Demo', ()=>{

    test.beforeAll(async() => {
        console.log("Insider beforeAll()");
    });

    test.beforeEach(async()=>{
        console.log("Insider beforeEach()");

    });

    test('Inside test()', async() =>{
        console.log("Insider test()");
    });
    

    test.afterEach(async()=>{
        console.log("Insider afterEach()");

    });

    test.afterAll(async() => {
        console.log("Insider afterAll()");
    });
});