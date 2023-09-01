import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api";
import { useAppDispatch } from "../store/hooks";
import { updateStore } from "../store/initialSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function handleSubmit(e: FormEvent) {
    setError(false);
    e.preventDefault();
    if (username !== "" && password !== "") {
      const result = await login(username, password);
      if ("error" in result) {
        setError(true);
      } else {
        dispatch(
          updateStore({
            modules: result.modules,
          })
        );
        navigate("/home");
      }
    }
  }

  return (
    <div className="mx-72 my-52">
      <h1 className="text-blue-500 font-black text-4xl">
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
          className="text-xl bg-blue-500 text-white py-2 px-4 rounded"
        />
      </form>
      {error && (
        <div className="text-xl bg-red-600 py-2 my-5 px-2 w-auto text-center">
          Ocurrió un error, por favor intenta de nuevo
        </div>
      )}
    </div>
  );
}

export default Login;
