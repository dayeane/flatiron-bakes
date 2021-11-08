import {useState} from 'react'


function CakeCard({cakeObj: {flavor, size = '6" cake', price}}) {

    const [like, setLike] = useState(false)
    const handleLike = () => setLike(!like)

    return(
        <>
            <h1>Flavor: {flavor}</h1>
            <p>Size: {size}</p>
            <p>Price: {price}</p>
            <p onClick={handleLike}>{like ? "❤️":"🤍"}</p>
        </>
    )
}

export default CakeCard