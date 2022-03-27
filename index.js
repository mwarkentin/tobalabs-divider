import { api } from "@serverless/cloud";

api.get("/", async (req, res) => {
  res.send("<h1>Hello Serverless Cloud!</h1>");
});

api.get('/:dividend/dividedby/:divisor', (req,res) => {
  let dividend = parseInt(req.params.dividend);
  let divisor = parseInt(req.params.divisor);

  console.log(dividend, divisor);

  if (divisor === 0 || isNaN(dividend) || isNaN(divisor)) {
    throw new Error(dividend + " / " + divisor);
  }

  let result = dividend / divisor;

  res.send(`${result}`);
});
