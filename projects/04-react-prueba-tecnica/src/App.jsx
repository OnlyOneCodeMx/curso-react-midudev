import { useState, useEffect } from "react"


const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'


export function App () {

    const [fact, setFact ] = useState()
    const [imageUrl, setImageUrl] = useState ()


    useEffect(() => {
      fetch (CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const {fact} = data
            setFact(fact)

            const threeFirstWords = fact.split(' ', 3).join(' ')
            console.log(threeFirstWords)

            setImageUrl(`https://cataas.com/cat/says/${threeFirstWords}?font=Impact&fontSize=50&fontColor=%23fff&fontBackground=none&position=bottom`)
    })
    
    }, [])

   

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
        </main>

    )
}