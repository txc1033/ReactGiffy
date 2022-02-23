const apiKey = 'UfWkMBcZclH36rO3rGx1O100TLaw6o2s';


export default function getGifs({keyword = 'cats'} = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
   return fetch(apiUrl)
      .then(response => response.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => {
          const {id, images, title} = image;
          const {url} = images.downsized_medium
          return {id, title, url}
        })
        return gifs
      });
}

 