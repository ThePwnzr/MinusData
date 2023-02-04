export async function fetchChars() {
    let data = await fetch(`${import.meta.env.BASE_URL}/data/chars.json`, { mode: 'no-cors' });
    return data.json()
}

// Returns null if not found
export async function fetchCharData(charName) {
    let data = await fetch(`${import.meta.env.BASE_URL}/data/${charName}/${charName}.json`);

    if(!data.ok){
        return null;
    }

    return data.json();
}