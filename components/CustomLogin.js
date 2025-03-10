import { useState } from "react";

const CustomLogin = ({ loginApiUrl, onSuccess }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(loginApiUrl, {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      onSuccess();
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div>
      <h1>Custom Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CustomLogin;
