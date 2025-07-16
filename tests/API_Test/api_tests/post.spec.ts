import { test, expect } from '@playwright/test';
import datan from '../api_data/datan.json';
import { faker } from '@faker-js/faker';
import { formatAPIRequest, getPOSTAPIRequestBody } from '../api_tests/API_Helper';
import path from 'path';
import fs from 'fs';
import tokenapijson from '../api_data/tokenapijson.json';
import putreq from '../api_data/putreq.json';
import patchreq from '../api_data/patchreq.json';


test.use({

    baseURL: process.env.base_url

})
test('Post request', async ({ request }) => {



    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const totalprice = faker.number.int({ min: 1000, max: 10000 });


    const postRqqBody = await getPOSTAPIRequestBody(firstname, lastname, totalprice, true, 'Breakfast', '2018-01-01', '2019-01-01');

    // const filepath=path.join(__dirname, '../api_data/datan.json');
    // const jsonTemp=fs.readFileSync(filepath, 'utf-8');
    // //const arr=['vinay', 'panmand', 1200];
    // const arr=[firstname, lastname, totalprice];

    //const postApiReq=await formatAPIRequest(jsonTemp, arr);



    const apiResponse = await request.post('/booking', { data: postRqqBody });
    const jsonapiResponse = await apiResponse.json();
    console.log(JSON.stringify(jsonapiResponse, null, 2));
    const book_id = jsonapiResponse.bookingid;
    console.log(book_id);

    expect(apiResponse.status()).toBe(200);
    expect(apiResponse.statusText()).toBe('OK');
    expect(apiResponse.headers()['content-type']).toContain('application/json');
    expect(jsonapiResponse.booking).toHaveProperty('firstname');

    expect(jsonapiResponse.booking.firstname).toBe(firstname);
    expect(jsonapiResponse.booking.lastname).toBe(lastname);



    // get request


    const getApiResponse = await request.get('/booking/', {

        params: {

            firstname: firstname,
            lastname: lastname

        }

    });

    const jsongetApiResponse = await getApiResponse.json();

    console.log(jsongetApiResponse);



    //Post request for getting token

    const posttokenresponse = await request.post('/auth', {

        data: tokenapijson


    },

    )

    const jsonpostapiresponse = await posttokenresponse.json();

    const token = jsonpostapiresponse.token;

    console.log(token);



    // put request 

   const putApiResponse= await request.put(`/booking/${book_id}`, {


        data: putreq,
        headers: {


            "Content-Type": "application/json",
            "Cookie": `token=${token}`

            ,
        }

    })


const jsonputApiResponse=await putApiResponse.json();

console.log(jsonputApiResponse);

//patch req:

const patchresponse=await request.patch(`/booking/${book_id}`, {
    data:patchreq,
    headers: {
        "Content-Type": "application/json",
        "Cookie": `token=${token}`
    }

});


const jsonpatchresponse= await patchresponse.json();

console.log(jsonpatchresponse);

//delete

const deleteresponse=await request.delete(`/booking/${book_id}`, {

    headers:{

        "Content-Type": "application/json",
        "Cookie": `token=${token}`
    }



})

const jsondeleteresponse= await deleteresponse.body();

console.log(jsondeleteresponse);

})

