export default async function HomePage() {

  try {
    const result = await fetch('/scrimba-info.txt');
    const text = await result.text();
    console.log("Fetched text content (not displayed on the page):", text);
  } catch (err) {
    console.log(err);
  }

  return(
    <p>nfcjnfc</p>
  );
}