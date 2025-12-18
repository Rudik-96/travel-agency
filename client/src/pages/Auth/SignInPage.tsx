import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/providers/StoreProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SignInPage: React.FC = observer(() => {
  const { authStore } = useStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await authStore.login(email, password);
    if (authStore.user) {
      navigate("/");
    }
  };

  return authStore.user ? (
    <div>{authStore.user.email}</div>
  ) : (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Sign in</h1>

      <form style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {authStore.error && (
          <div style={{ color: "red", fontSize: 14 }}>{authStore.error}</div>
        )}

        <button
          type="submit"
          onClick={handleLogin}
          disabled={authStore.loading}
        >
          {authStore.loading ? "Signing in..." : "Sign in"}
        </button>

        <div style={{ marginTop: 8, fontSize: 14 }}>
          No account? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
});
