import Link from "next/link";

export function FilmCard({ film, imageHeight = "16em", href = "" }) {
  function formatReleaseYear(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div>
          {href != "" && (
            <Link href={href}>
              <img
                src={film.photo}
                role="button"
                className="card-img-top"
                style={{
                  height: imageHeight,
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Link>
          )}
          {href == "" && (
            <img
              src={film.photo}
              className="card-img-top"
              style={{
                height: imageHeight,
                width: "100%",
                objectFit: "cover",
              }}
            />
          )}
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
          <Genre genres={film.genre}></Genre>
        </div>
      </div>
    </div>
  );
}

function Rating({ rating }) {
  const notFilledStars = 5 - rating;
  return (
    <div>
      {geStars(rating, "/star-f.png")}
      {geStars(notFilledStars, "/star-o.png")}
    </div>
  );

  function geStars(count, src) {
    const stars = [];
    for (let index = 0; index < count; index++) {
      stars.push(
        <img
          key={index}
          src={src}
          className="m-2"
          style={{ height: 18, width: 18 }}
        />
      );
    }
    return stars;
  }
}

function Genre({ genres }) {
  return (
    <div className="">
      {genres.map((genre, index) => {
        return (
          <span
            key={index}
            className="badge bg-dark"
            style={{ marginLeft: ".5em" }}
          >
            {genre}
          </span>
        );
      })}
    </div>
  );
}
