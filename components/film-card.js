export function FilmCard({ film }) {
  function formatReleaseYear(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div>
          <img
            src={film.photo}
            className="card-img-top"
            style={{ height: "16em", width: "100%", objectFit: "cover" }}
          />
        </div>
        <h5 className="card-header">{film.name}</h5>
        <div className="card-body">
          <p className="card-text">{film.description}</p>
          <div>
            <small className="text-muted">
              Released: {formatReleaseYear(film.releaseDate)}
            </small>
          </div>
          <div>
            <small className="text-muted">Country: {film.country}</small>
          </div>
          <Rating rating={film.rating}></Rating>
          <h5 className="text-primary mt-3">USD {film.ticketPrice}</h5>
        </div>
      </div>
    </div>
  );
}

function Rating({ rating }) {
  const notFilledStars = 5 - rating;
  return (
    <div>
      {Array(rating)
        .fill(0)
        .map((e) => (
          <img
            src="/star-f.png"
            className="m-2"
            style={{ height: 18, width: 18 }}
          />
        ))}
      {Array(notFilledStars)
        .map((e) => (
          <img
            src="/star-o.png"
            className="m-2"
            style={{ height: 18, width: 18 }}
          />
        ))}
    </div>
  );
}
