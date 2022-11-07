import { toast } from 'react-toastify';

const RecipeList = ({recipeList, fetchAllRecipes}) => {

    const hadnleDelete = (recipe) => {
        const confirmUser = window.confirm('Are you sure you want to delete this recipe?');
        console.log(confirmUser);

        if(confirmUser){
            fetch(`${process.env.REACT_APP_URL_API}/recipes/${recipe.id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                toast.success(`🦄 Success to delete ${recipe.title}`, {
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
    }

    return ( 
        <ul className="recipe-list">
            {recipeList.map( recipe => (
                <li key={recipe.id} >
                    {recipe.title}
                    <button onClick={() => hadnleDelete(recipe)}>DELETE</button>
                    <button>Update</button>
                </li>
            ))}
        </ul>
     );
}
 
export default RecipeList;