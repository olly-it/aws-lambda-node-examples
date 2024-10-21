# node-typescript-with-function-url
simple ts code for a lambda with a function url (APIGatewayProxyEventV2 and APIGatewayProxyResultV2 object will be considered)

## see
https://docs.aws.amazon.com/lambda/latest/dg/typescript-handler.html#typescript-handler-basics

## compile
npx tsc

## test
use an http caller (e.g. postman) and invoke the function url

## run
node dist/???.ts