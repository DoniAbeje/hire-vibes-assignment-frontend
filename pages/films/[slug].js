import { useRouter } from "next/router";
import Comment from "../../components/comment";
import CommentBox from "../../components/comment-box";
import { FilmCard } from "../../components/film-card";
import { sampleComments, sampleFilm } from "../../data";
import Layout from "../../layouts/layout";

export default function FilmDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <FilmCard film={sampleFilm} imageHeight="24em"></FilmCard>
          </div>
          <div className="col-lg-2"> 

          </div>
          <div className="col-lg-4">
            <h2>Comments (2)</h2>
            <CommentBox></CommentBox>
            {sampleComments.map(comment =>{
              return <Comment comment={comment}></Comment>
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
