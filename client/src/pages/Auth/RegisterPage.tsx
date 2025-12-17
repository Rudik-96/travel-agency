import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/providers/StoreProvider";
import { useNavigate } from "react-router-dom";

export const RegisterPage: React.FC = observer(() => {
  const { authStore } = useStore();
  const navigate = useNavigate();

  const [name, setName] = useState(""); // пока только на фронте
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setLocalError("Passwords do not match");
      return;
    }
    setLocalError(null);

    await authStore.register(email, password); // name пока не шлём на бэк
    if (!authStore.error) {
      navigate("/sign-in"); // после регистрации идём на логин
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h1>Register</h1>

      <form
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        {(localError || authStore.error) && (
          <div style={{ color: "red", fontSize: 14 }}>
            {localError || authStore.error}
          </div>
        )}

        <button type="submit" disabled={authStore.loading}>
          {authStore.loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
});