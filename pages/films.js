import { FilmCard } from "../components/film-card";
import { sampleFilms } from "../data";
import Layout from "../layouts/layout";

export default function Home() {

  return (
    <Layout>
      <div className="album py-5">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {sampleFilms.map((film) => (
              <FilmCard film={film}></FilmCard>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}