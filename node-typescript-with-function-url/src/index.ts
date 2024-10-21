import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context } from 'aws-lambda'
type LambdaFunctionUrlEvent = APIGatewayProxyEventV2
type LambdaFunctionUrlResult = APIGatewayProxyResultV2

export async function handler(
    event: LambdaFunctionUrlEvent,
    context: Context
  ): Promise<LambdaFunctionUrlResult> {
    console.log("lambda called: " + context.functionName);
    console.log(`method: ${event.requestContext.http.method}, path: ${event.rawPath}, body: ${event.body}`);

    const ret = {result:"ok", method_called:event.requestContext.http.method, rnd:Math.random()}

    return {
      statusCode: 200,
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(ret, null, 2),
    }
  }