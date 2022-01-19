import { useState } from "react";
import * as service from "../service";

export default function CommentBox({ filmId, onNewComment }) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  return (
    <form onSubmit={submitComment}>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Full Name
        </label>
        <input
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Your comment
        </label>
        <textarea
          class="form-control"
          id="comment-box"
          rows="3"
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-primary mt-3 mb-3">
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
