export default function CommentBox() {
  return (
    <form>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Full Name
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="John Doe"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Your comment
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-primary mt-3 mb-3">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
