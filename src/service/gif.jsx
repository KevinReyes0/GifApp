const api_key = '2HpDeGUbKtC5fQNgqzcMROs0relp0Cl1'
const limit = 10

export const reqGif = async (categoria) => {
    try {
      
      /*await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`).then(async(response) => {
        await response.json().then(({data}) => {
          return data.image.original.url
        })
      })*/

        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=${limit}`)

        const {data} = await response.json()


        const arregloGifs = data.map((gif)=>({
              id: gif.id,
              url: gif.images.original.url
        }))

    return arregloGifs

    } catch (error) {
      console.log(error)
    }
}