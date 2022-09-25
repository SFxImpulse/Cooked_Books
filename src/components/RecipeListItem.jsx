import './RecipeListItem.scss';

function RecipeListItem(props) {
  return (
    <li>
      <section className='recipe-container'>  
        <img className='recipe-img' src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F17%2F21014-Good-old-Fashioned-Pancakes-mfs_002.jpg" alt="Pancakes" width="380" height="300" ></img>
        <h2 className="recipe-name text--bold">Pancakes</h2>
      </section>
    </li>
  )
}

export default RecipeListItem;