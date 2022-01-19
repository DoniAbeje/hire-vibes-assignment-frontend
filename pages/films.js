import { useEffect, useState } from "react";
import { FilmCard } from "../components/film-card";
import Layout from "../layouts/layout";
import * as service from "../service";

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(async () => {
    fetchFilms();
  }, []);

  return (
    <Layout>
      <div className="album py-5">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {films.length != 0 &&
              films.map((film) => <FilmCard film={film}></FilmCard>)}
            {films.length == 0 && (
              <h2 className="text-center">There Are No Films</h2>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );

  async function fetchFilms() {
    const response = await service.fetchFilms();
    if (response) {
      setFilms(await response.json());
    }
  }
}
