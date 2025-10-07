
function MangaCard({manga}) {
  return (
    <div className="manga-card">MangaCard
        <div className="manga-poster">
            <img src= {manga.url} alt={manga.title} />
        </div>
        <div className="manga-info">
            <h3>{manga.title}</h3>
            <p>{manga.chapters}</p>

        </div>
    </div>
  )
}

export default MangaCard