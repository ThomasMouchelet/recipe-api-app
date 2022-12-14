import { useState } from "react";
import { toast } from 'react-toastify';

const FormRecipe = ({fetchAllRecipes}) => {  
    const [credentials, setCredentials] = useState({})

    const handleChange = (event) => {
        const {value, name} = event.target

        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // fetch POST request to create a new recipe
        fetch("http://localhost:8000/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                toast.success(`🦄 Success to add ${data.title}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                fetchAllRecipes()
            })
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                placeholder="Entrez le titre de la recette"
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="category" 
                placeholder="Entrez la catégorie de la recette" 
                onChange={handleChange}
            />
            <input type="submit" value="Ajouter" />
        </form>
    );
}
 
export default FormRecipe;