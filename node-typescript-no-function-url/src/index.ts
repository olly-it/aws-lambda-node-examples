import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
    console.log('got EVENT:' + JSON.stringify(event));
    return {code:"OK", body:"hi there!"};
};