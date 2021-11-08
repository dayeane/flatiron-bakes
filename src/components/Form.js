import {useState} from 'react'

function Form ({handleAddCake}) {

    function handleSubmit(e) {
        e.preventDefault()
        handleAddCake(formData)
        
    }

    const [formData, SetFormData] = useState ({
        flavor: '',
        size: '',
        image:'',
        price:'',
    })

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        SetFormData({...formData, [e.target.name]:e.target.value})
    }

    return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Flavor</label>
        <input
            type="text"
            name="flavor"
            aria-label="title"
            value={formData.flavor}
            onChange={handleChange}
        ></input>

        <label>Image</label>
        <input
            type="text"
            name="image"
            aria-label="image"
            value={formData.image}
            onChange={handleChange}
        ></input>

        <label>Size</label>
        <input
            type="text"
            name="size"
            aria-label="size"
            value={formData.size}
            onChange={handleChange}
        ></input>

         <label>Price</label>
        <input
            type="number"
            name="price"
            aria-label="price"
            value={formData.price}
            onChange={handleChange}
        ></input>
        <input type="submit"></input>
    </form>
    </>
    )
}


export default Form;