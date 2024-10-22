import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context } from 'aws-lambda'
type LambdaFunctionUrlEvent = APIGatewayProxyEventV2
type LambdaFunctionUrlResult = APIGatewayProxyResultV2

export async function handler(
    event: LambdaFunctionUrlEvent,
    context: Context
  ): Promise<LambdaFunctionUrlResult> {
    console.log("lambda called: " + context.functionName);

    // via http call, body is always a string. If needed, it can be converted as object with JSON.parse(body);
    console.log("body_type: "+ (typeof event.body));
    console.log("body: ", event.body);

    // composing the response
    const ret = {result: "ok", function_called: context.functionName, rnd:Math.random()}

    return {
      statusCode: 200,
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(ret, null, 2),
    }
  }