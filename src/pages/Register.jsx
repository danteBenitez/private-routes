export function RegisterPage() {
  return (
    <form className="container w-100 m-5 fs-4">
      <div className="mb-3">
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Username
          </label>
          <input
            type="password"
            name="username"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
