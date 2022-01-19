import Layout from "../../layouts/layout";
import Register from "../register";

export default function CreateFilm() {
  return (
    <Layout>
      <div className="container-fluid">
        <h1 className="mb-5 text-center">
          <span className="text-primary">FILMS</span> | Create
        </h1>
        <form>
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
              />
              <label htmlFor="release-date-input" className="form-label mt-3">
                Release Date
              </label>
              <input
                required
                type="date"
                className="form-control"
                id="release-date-input"
              />
              <label htmlFor="country-input" className="form-label mt-3">
                Country
              </label>
              <select
                required
                className="form-select"
                id="country-input"
                defaultValue="1"
              >
                <option>Select Country</option>
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
                defaultValue={["1"]}
              >
                <option>Select Genre</option>
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
                min="0"
                className="form-control"
                id="rating-input"
                placeholder=""
              />
              <label htmlFor="price-input" className="form-label mt-3">
                Price
              </label>
              <input
                required
                type="number"
                className="form-control"
                id="price-input"
                placeholder=""
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
              ></input>
              <label htmlFor="description-input" className="form-label mt-3">
                Description
              </label>
              <textarea
                required
                className="form-control"
                id="description-input"
                rows="4"
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
}
