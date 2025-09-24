import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export default async function HomePage() {

  try {
    const result = await fetch('https://en.wikipedia.org/wiki/Thomas_M%C3%BCller');
    const text = await result.text();

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize:500,
      separators: ['\n\n', '\n', ' ', ''], // default setting
      chunkOverlap:50
    });

    const output = await splitter.createDocuments([text]);
    console.log(output);
  } catch (err) {
    console.log(err);
  }

  return(
    <p>nfcjnfc</p>
  );
}