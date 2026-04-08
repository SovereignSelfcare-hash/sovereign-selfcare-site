export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px 24px",
        maxWidth: "960px",
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      <div style={{ marginBottom: "20px", fontSize: "12px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#666" }}>
        Sovereign Selfcare
      </div>

      <h1 style={{ fontSize: "48px", lineHeight: 1.1, margin: "0 0 20px" }}>
        Personalized skincare. Formulated in front of you.
      </h1>

      <p style={{ fontSize: "20px", maxWidth: "720px", marginBottom: "36px", color: "#444" }}>
        Sovereign Selfcare is building a biotech-enabled skincare experience where customers move
        through a guided 6-step system while final formulation happens in a controlled glass lab at
        the center of the space.
      </p>

      <section style={{ marginBottom: "40px", padding: "24px", border: "1px solid #e5e5e5", borderRadius: "18px" }}>
        <h2 style={{ marginTop: 0 }}>What We’re Building</h2>
        <p>
          A premium skincare destination that blends personalization, hospitality, and controlled lab
          production into one flagship experience.
        </p>
      </section>

      <section style={{ marginBottom: "40px", padding: "24px", border: "1px solid #e5e5e5", borderRadius: "18px" }}>
        <h2 style={{ marginTop: 0 }}>The 6-Station Experience</h2>
        <ol style={{ paddingLeft: "20px" }}>
          <li>AI Skin Analysis</li>
          <li>Product + Size Selection</li>
          <li>Active Ingredients</li>
          <li>Color Personalization</li>
          <li>Scent Personalization</li>
          <li>pH Balancing + Lab Production Behind Glass</li>
        </ol>
      </section>

      <section style={{ marginBottom: "40px", padding: "24px", border: "1px solid #e5e5e5", borderRadius: "18px" }}>
        <h2 style={{ marginTop: 0 }}>How It Makes Money</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Customized skincare sessions and product builds</li>
          <li>Memberships and replenishment programs</li>
          <li>Private events and group experiences</li>
          <li>Professional referral partnerships</li>
          <li>Future platform and multi-location expansion</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px", padding: "24px", border: "1px solid #e5e5e5", borderRadius: "18px" }}>
        <h2 style={{ marginTop: 0 }}>Join the Waitlist</h2>
        <input
          placeholder="Email address"
          style={{
            padding: "12px",
            width: "100%",
            maxWidth: "420px",
            marginBottom: "12px",
            border: "1px solid #ccc",
            borderRadius: "12px",
            fontSize: "16px"
          }}
        />
        <br />
        <button
          style={{
            padding: "12px 20px",
            borderRadius: "12px",
            border: "1px solid #111",
            background: "#111",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Join Waitlist
        </button>
      </section>

      <section style={{ padding: "24px", border: "1px solid #e5e5e5", borderRadius: "18px" }}>
        <h2 style={{ marginTop: 0 }}>Investor Interest</h2>
        <p>
          Sovereign Selfcare is a multi-revenue skincare concept combining personalization,
          premium experience, and controlled production.
        </p>
        <p style={{ marginBottom: 0 }}>
          This starter site is intentionally minimal so it deploys cleanly on Vercel first.
        </p>
      </section>
    </main>
  );
}
