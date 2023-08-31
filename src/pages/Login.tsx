import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (username !== "" && password !== "") {
      const result = await login(username, password);
      console.log(result);
      navigate("/home");
    }
  }

  return (
    <div className="mx-72 my-52">
      <h1 className="text-sky-400 font-black text-4xl">
        Inicia sesión en {""}
        <span className="text-slate-700">Super Pagos</span>
      </h1>
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block text-gray-700 text-xl font-bold mb-2">
            Usuario
          </label>

          <input
            name="username"
            className="border mb-2 py-2 px-3 rounded text-gray-700 w-full"
            type="text"
            placeholder="Usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>

          <input
            name="password"
            className="border mb-2 py-2 px-3 rounded text-gray-700 w-full"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </div>
  );
}

export default Login;
