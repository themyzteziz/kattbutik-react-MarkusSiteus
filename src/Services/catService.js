// Fetches cat breeds from The Cat API
const API_URL = 'https://api.thecatapi.com/v1/breeds?limit=30'

export async function getCats() {

  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Could not fetch cats')
  }

  return await response.json()
}