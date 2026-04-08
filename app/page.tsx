export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Sovereign Selfcare</h1>
      <p>Personalized skincare. Formulated in front of you.</p>

      <h2>What We’re Building</h2>
      <p>
        A premium skincare experience where products are customized and created
        in a controlled lab environment behind glass.
      </p>

      <h2>The Experience</h2>
      <ul>
        <li>AI Skin Analysis</li>
        <li>Product Selection</li>
        <li>Active Ingredients</li>
        <li>Color + Scent Customization</li>
        <li>pH Balancing</li>
        <li>Lab Production Behind Glass</li>
      </ul>

      <h2>Join the Waitlist</h2>
      <input placeholder="Email" style={{ padding: "10px" }} />
    </main>
  );
}
