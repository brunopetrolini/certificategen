export const handle = (event) => {
  return {
    statusCode: 200,
    body: {
      message: "Hello World Serverless"
    },
    headers: {
      "Content-Type": "application/json"
    }
  }
}