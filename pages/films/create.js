import { useState } from "react";
import { NotificationManager } from "react-notifications";
import Layout from "../../layouts/layout";
import * as service from "../../service";

export default function CreateFilm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [country, setCountry] = useState("USA");
  const [photo, setPhoto] = useState("");
  const [genre, setGenre] = useState([]);
  const [description, setDescription] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");

  return (
    <Layout>
      <div className="container-fluid">
        <h1 className="mb-5 text-center">
          <span className="text-primary">FILMS</span> | Create
        </h1>
        <form onSubmit={onCreate}>
          <div className="row justify-content-center bg-light pt-4 pb-4">
            <div className="col-lg-3">
              <label htmlFor="title-input" className="form-label">
                Title
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="title-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="release-date-input" className="form-label mt-3">
                Release Date
              </label>
              <input
                required
                type="date"
                className="form-control"
                id="release-date-input"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
              />
              <label htmlFor="country-input" className="form-label mt-3">
                Country
              </label>
              <select
                required
                className="form-select"
                id="country-input"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="USA">USA</option>
                <option value="England">England</option>
                <option value="Brasil">Brasil</option>
                <option value="Spain">Spain</option>
                <option value="Argentina">Argentina</option>
                <option value="Kenya">Kenya</option>
                <option value="Israel">Israel</option>
              </select>

              <label htmlFor="genre-input" className="form-label mt-3">
                Genre
              </label>
              <select
                required
                className="form-select"
                id="genre-input"
                multiple
                onChange={(e) =>
                  setGenre(
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
              >
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
                <option value="Drama">Drama</option>
                <option value="Thriller">Thriller</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Romance">Romance</option>
              </select>
            </div>

            <div className="col-lg-3">
              <label htmlFor="rating-input" className="form-label">
                Rating
              </label>
              <input
                required
                type="number"
                max="5"
                min="1"
                className="form-control"
                id="rating-input"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}
              />
              <label htmlFor="price-input" className="form-label mt-3">
                Price
              </label>
              <input
                required
                type="number"
                className="form-control"
                id="price-input"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(parseFloat(e.target.value))}
              />
              <label htmlFor="photo-input" className="form-label mt-3">
                Photo
              </label>
              <input
                required
                className="form-control"
                type="file"
                id="photo-input"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
              ></input>
              <label htmlFor="description-input" className="form-label mt-3">
                Description
              </label>
              <textarea
                required
                className="form-control"
                id="description-input"
                rows="4"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="row justify-content-center bg-light pb-4">
            <div className="d-grid gap-2 col-lg-6">
              <button type="submit" className="btn btn-primary mt-3 mb-3">
                CREATE
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );

  async function onCreate(event) {
    event.preventDefault();
    const photoUrl = await uploadPhoto();
    if (!photoUrl) {
      return;
    }
    createFilm(photoUrl);
  }

  async function createFilm(photoUrl) {
    const film = {
      name,
      rating,
      releaseDate,
      ticketPrice,
      country,
      genre,
      description,
      photo: photoUrl,
    };

    const response = await service.createFilm(film);
    if (response && response.ok) {
      window.location = "/films";
      NotificationManager.success("Film Created!");
    }
  }

  async function uploadPhoto() {
    let url;
    try {
      url = await service.uploadFile(photo, getFileName());
    } catch (error) {
      NotificationManager.error("Unable to upload photo");
      return null;
    }
    return url;
  }

  function getFileName() {
    const extention = photo.name.split(".").pop();
    const uniqueName = Date.now().toString();
    return `${uniqueName}.${extention}`;
  }
}
