export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About TechNova</h1>

      <div className="mb-8">
        <p className="text-lg text-center max-w-2xl mx-auto">
          TechNova is a cutting-edge software company dedicated to creating innovative solutions that transform the way
          businesses operate in the digital world.
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

