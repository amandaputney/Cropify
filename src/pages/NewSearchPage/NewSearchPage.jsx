

const PlantListAPI= 'https://perenual.com/api/species-list?page=1&key=sk-U1XV64f8bef48b9d62094';



export default function NewSearchPage () {
    return (
    <>
        <h1>New Search Page</h1>
        <form action="GET">
            <input type="text" />
            <button>Search</button>
        </form>
    </>
    );
}