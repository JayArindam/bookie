export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 font-mono ">About Bookie</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our AI-Based Solution</h2>
        <p className="text-lg">
          Bookie is an innovative AI-powered platform dedicated to revolutionizing education by providing free,
          high-quality educational services to learners worldwide. Our mission is to make quality education accessible
          to everyone, regardless of their background or financial situation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            <strong>AI Book Generation:</strong> Create personalized educational content tailored to individual learning
            needs.
          </li>
          <li>
            <strong>AI Counsellor:</strong> Provide guidance and support for academic and career decisions.
          </li>
          <li>
            <strong>AI Doubt Solver:</strong> Offer instant help with academic questions and clarifications.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Free and Open Source</h2>
        <p className="text-lg">
          At Bookie, we believe that quality education should be accessible to all. That's why our entire solution is
          completely free to use. Moreover, we're committed to transparency and collaboration, which is why Teemo is
          open source. This means that educators, developers, and enthusiasts can contribute to improving and expanding
          our platform for the benefit of learners everywhere.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Aim</h2>
        <p className="text-lg">
          Bookie's primary aim is to democratize education through the power of artificial intelligence. We strive to:
        </p>
        <ul className="list-disc list-inside text-lg mt-2 space-y-2">
          <li>Bridge educational gaps across different regions and socioeconomic backgrounds.</li>
          <li>Empower learners with personalized, adaptive learning experiences.</li>
          <li>Foster a global community of lifelong learners and educators.</li>
          <li>Continuously innovate and improve our AI-driven educational tools.</li>
        </ul>
      </section>

    </div>
  )
}