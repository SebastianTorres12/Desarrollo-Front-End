
export async function fetchCharacters () {
    try {
        const response = await fetch("https://dummyjson.com/users")
        const result = await response.json();
        return result.users;
    } catch (error) {
        console.log(error)
    }
}