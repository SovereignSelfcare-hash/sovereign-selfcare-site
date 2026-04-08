export default function Home() {
  return (
    <main style={{fontFamily: "sans-serif", padding: "40px", maxWidth: "900px", margin: "0 auto"}}>
      
      <h1 style={{fontSize: "42px", marginBottom: "20px"}}>
        Sovereign Selfcare
      </h1>

      <p style={{fontSize: "18px", marginBottom: "30px"}}>
        Personalized skincare. Formulated in front of you.
      </p>

      <section style={{marginBottom: "40px"}}>
        <h2>What We’re Building</h2>
        <p>
          Sovereign Selfcare is a biotech-enabled skincare experience where customers
          move through a guided 6-step system while final formulation happens in a
          controlled glass lab at the center of the space.
        </p>
      </section>

      <section style={{marginBottom: "40px"}}>
        <h2>The Experience</h2>
        <ul>
          <li>AI Skin Analysis</li>
          <li>Product Selection</li>
          <li>Active Ingredients</li>
          <li>Color + Scent Customization</li>
          <li>pH Balancing</li>
          <li>Lab Production (Behind Glass)</li>
        </ul>
      </section>

      <section style={{marginBottom: "40px"}}>
        <h2>Join the Waitlist</h2>
        <input placeholder="Email" style={{padding: "10px", width: "100%", marginBottom: "10px"}} />
        <button style={{padding: "12px 20px"}}>
          Join
        </button>
      </section>

      <section>
        <h2>Investor Interest</h2>
        <p>
          Sovereign Selfcare is a multi-revenue skincare concept combining
          personalization, experience, and controlled production.
        </p>
      </section>

    </main>
  );
}
