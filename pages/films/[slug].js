import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Comment from "../../components/comment";
import CommentBox from "../../components/comment-box";
import { FilmCard } from "../../components/film-card";
import { sampleComments, sampleFilm } from "../../data";
import Layout from "../../layouts/layout";
import * as service from "../../service";

export default function FilmDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [film, setFilm] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchFilmBySlug(slug);
  }, []);

  return (
    <Layout>
      <div className="container">
        {film != null && (
          <div className="row">
            <div className="col-lg-4">
              <FilmCard film={film} imageHeight="24em"></FilmCard>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4">
              <h2>Comments (2)</h2>
              <CommentBox></CommentBox>
              {sampleComments.map((comment) => {
                return <Comment comment={comment}></Comment>;
              })}
            </div>
          </div>
        )}
        {notFound && (
          <div className="row">
            <div className="col-lg-4"></div>
            <h1 className="text-center">Film Not Found</h1>
          </div>
        )}
      </div>
    </Layout>
  );

  async function fetchFilmBySlug(slug) {
    const response = await service.fetchFilmBySlug(slug);
    if (response.ok) {
      const json = await response.json();
      setFilm(json);
      setNotFound(false);
    } else if (response.status == 404) {
      setNotFound(true);
    }
  }
}
