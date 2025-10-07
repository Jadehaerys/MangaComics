import MangaCard from "../components/MangaCard";
import { useState, useEffect } from "react";
import { fetchMangaDetails, fetchMangaList, getImageUrl } from "../services/API";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [mangaList, setMangaList] = useState([]);
    const [selectedManga, setSelectedManga] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadManga() {
            const mangas = await fetchMangaList();
            setMangaList(mangas);
            setLoading(false);
        }
        loadManga();
    }, []);

    const handleMangaClick = async (mangaId) => {
        const mangaDetails = await fetchMangaDetails(mangaId);
        setSelectedManga(mangaDetails);
    }


    const filteredManga = mangaList.filter(manga =>
        manga.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="home">
            <div className="search-bar">
                <input> </input>
                <button>Search</button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="manga-list">
                    {filteredManga.map(manga => (
                        <div key={manga.id} onClick={() => handleMangaClick(manga.id)}>
                            <MangaCard manga={manga} />
                        </div>
                    ))}
                </div>
            )}
            {selectedManga && (
                <div className="manga-details">
                    <h2>{selectedManga.title}</h2>
                    <img src={getImageUrl(selectedManga.url)} alt={selectedManga.title} />
                    <p>{selectedManga.synopsis}</p>
                    <p><strong>Authors:</strong> {selectedManga.authors}</p>
                    <p><strong>Genres:</strong> {selectedManga.genres}</p>
                </div>
            )}
        </div>
    )


}
export default Home