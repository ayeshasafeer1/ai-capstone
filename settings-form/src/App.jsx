function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Settings</h1>

      <form>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label>
          <br />
          <input type="text" placeholder="Enter your name" />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <br />
          <input type="email" placeholder="Enter your email" />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Theme:</label>
          <br />
          <select>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>

        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default App;