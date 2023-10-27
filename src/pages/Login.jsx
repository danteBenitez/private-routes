import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { loginUser } from "../services/auth";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function Login() {
  const { form, handleChange, resetForm } = useForm({
    username: '',
    password: ''
  });
  const { isLogged, login } = useContext(AuthContext);

  if (isLogged) {
    return <Navigate  to="/app" />
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser({
        username: form.username,
        password: form.password
    });

    if (!response.ok) {
        const { message } = response.data;
        return alert(message);
    }

    login(form.username, form.email);

    resetForm();
  }

  return (
    <form className="container w-100 m-5 fs-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="exampleInputPassword1"
            value={form.username}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={form.password}
          onChange={handleChange}
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
