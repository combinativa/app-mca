import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function Login() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuário logado:", user);
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Erro no login:", err.code, err.message);
      alert(`Erro ao fazer login: ${err.message}`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Entrar no App-MCA</h1>
      <button onClick={handleLogin} style={{ fontSize: "18px", padding: "10px 20px" }}>
        Entrar com Google
      </button>
    </div>
  );
}
