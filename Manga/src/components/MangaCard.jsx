
function MangaCard({manga}) {
  const placeholder = '/vite.svg';
  return (
    <article className="manga-card">
        <div className="manga-poster">
            <img src={manga.url || placeholder} alt={manga.title || 'Manga poster'} />
        </div>
        <div className="manga-info">
            <h3>{manga.title}</h3>
            <p className="muted">{manga.chapters ? `${manga.chapters} chapters` : 'Chapters unknown'}</p>

        </div>
    </article>
  )
}

export default MangaCard