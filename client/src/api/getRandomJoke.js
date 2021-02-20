export async function getRandomJoke() {
  const response = await fetch(`/api/randomJoke`);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
  const randomJoke = await response.json();
  return randomJoke;
}
