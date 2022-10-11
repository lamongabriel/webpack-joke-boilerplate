//##
import axios from 'axios'

export async function getJoke() {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }

    const response = await axios.get('https://icanhazdadjoke.com/', config)
    joke.innerText = response.data.joke
  } catch (error) {
    joke.innerText = 'Error'
  }
}
