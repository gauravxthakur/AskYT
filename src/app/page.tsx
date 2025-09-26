import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { createClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase';
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/huggingface_transformers";


export default async function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  try {
    const result = await fetch(`${baseUrl}/scrimba-info.txt`);
    const text = await result.text();

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize:500,
      separators: ['\n\n', '\n', ' ', ''], // default setting
      chunkOverlap:50
    });

    const output = await splitter.createDocuments([text]);
    console.log(output);

    const sbApiKey = process.env.SUPABASE_API_KEY;
    const sbUrl = process.env.SUPABASE_URL_LC_CHATBOT;
    const llmApiKey = process.env.LLM_API_KEY;

    const client = createClient( sbUrl, sbApiKey);

    const embeddings = new HuggingFaceTransformersEmbeddings({ model: "Xenova/all-MiniLM-L6-v2"});

    await SupabaseVectorStore.fromDocuments(output, embeddings, {client, tableName: 'documents'})

    console.log("embeddings uploaded successfully to the Supabase table.")

  } catch (err) {
    console.log(err);
  }

  return(
    <p>nfcjnfc</p>
  );
}