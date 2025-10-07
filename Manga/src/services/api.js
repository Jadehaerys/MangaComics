const BASE_URL = "https://api.jikan.moe/v4";
const IMAGE_BASE_URL = "https://cdn.myanimelist.net/images/manga";

export async function fetchMangaList() {
    try {   
        const response = await fetch(`${BASE_URL}/top/manga`);
        const data = await response.json();
        return data.data.map(manga => ({
            id: manga.mal_id,
            title: manga.title,
            url: manga.images.jpg.image_url,
            chapters: manga.chapters
        }));
    } catch (error) {
        console.error("Error fetching manga list:", error);
        return [];
    }
}
export async function fetchMangaDetails(mangaId) {
    try {
        const response = await fetch(`${BASE_URL}/manga/${mangaId}`);
        const data = await response.json();
        return {
            id: data.data.mal_id,
            title: data.data.title,
            url: data.data.images.jpg.image_url,
            chapters: data.data.chapters,
            synopsis: data.data.synopsis,
            authors: data.data.authors.map(author => author.name).join(", "),
            genres: data.data.genres.map(genre => genre.name).join(", "),
        };
    } catch (error) {
        console.error("Error fetching manga details:", error);
        return null;
    }
}
export function getImageUrl(imagePath) {
    return `${IMAGE_BASE_URL}/${imagePath}`;
}




