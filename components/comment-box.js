import { useState } from "react";
import * as service from "../service";

export default function CommentBox({ filmId, onNewComment }) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  return (
    <form onSubmit={submitComment}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Full Name
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Your comment
        </label>
        <textarea
          className="form-control"
          id="comment-box"
          rows="3"
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary mt-3 mb-3">
            Submit
          </button>
        </div>
      </div>
    </form>
  );

  async function submitComment(event) {
    event.preventDefault();
    const requestBody = { filmId, comment, name };
    const response = await service.submitComment(requestBody);
    if(response.ok){
      if(onNewComment){
        const json = await response.json()
        onNewComment(json)
      }
    }
  }
}
