import { useEffect, useState } from 'react'

const API_URL = 'https://random.dog/woof.json'

function DogImage() {
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setImageUrl(data.url))
    }, [])

    return <img src={imageUrl} alt="Dog" />
}

export default DogImage
