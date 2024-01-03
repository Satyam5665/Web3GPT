import express from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello",
  });
});
let c = "1";
app.post("/", async (req, res) => {
  try {
    const prompt = "Tell me a Joke.";
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 1,
      max_tokens: 3000,
      top_p: 1,
    });

    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send(error || "Something went wrong");
  }
});

app.listen(4000, () => {
  console.log("AI Server Started at 4000");
});
