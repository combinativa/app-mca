import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function Dashboard() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
      } else {
        // Se não estiver logado, redireciona para o login
        window.location.href = "/login";
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  if (!usuario) {
    return <p style={{ textAlign: "center", marginTop: 100 }}>Carregando...</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Bem-vindo, {usuario.displayName}</h1>
      <img src={usuario.photoURL} alt="Foto de perfil" style={{ borderRadius: "50%", width: "100px" }} />
      <p>{usuario.email}</p>
      <button onClick={handleLogout} style={{ marginTop: 20 }}>
        Sair
      </button>
    </div>
  );
}
