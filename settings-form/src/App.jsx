import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    theme: "Light",
    notifications: true,
  });

  const [errors, setErrors] = useState({});

  function validate(data) {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Enter a valid email.";
    }

    return newErrors;
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validation = validate(form);
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      alert("Settings saved successfully!");
    }
  }

  return (
    <div className="container">
      <h1>Settings</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Theme</label>
        <select
          name="theme"
          value={form.theme}
          onChange={handleChange}
        >
          <option>Light</option>
          <option>Dark</option>
        </select>

        <label className="checkbox">
          <input
            type="checkbox"
            name="notifications"
            checked={form.notifications}
            onChange={handleChange}
          />
          Enable Notifications
        </label>

        <button type="submit">
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default App;