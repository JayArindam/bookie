export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Teemo</h1>

      <div className="mb-8">
        <p className="text-lg text-center max-w-4xl mx-auto">
        At Teemo, we believe in the power of imagination and the magic of storytelling. Our mission is to empower writers of all levels by providing them with an innovative tool that unlocks creative potential.
Our AI Book Generator utilizes cutting-edge language models to assist writers in crafting compelling narratives, 
overcoming writer's block, and exploring new literary horizons. Whether you're a seasoned author or just starting your writing journey, our tool can help you:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {["Innovation", "Collaboration", "Excellence"].map((value) => (
          <div key={value} className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{value}</h3>
            <p>We strive for {value.toLowerCase()} in everything we do, pushing the boundaries of what's possible.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

