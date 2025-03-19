import Link from "next/link";

const servicesData = [
  {
    id: "basic-wash",
    title: "Basic Wash",
    description: "Exterior wash, tire cleaning, and windows",
    price: "$49.99",
    duration: "45 minutes",
    features: [
      "Exterior hand wash",
      "Wheel cleaning",
      "Tire dressing",
      "Window cleaning",
      "Basic exterior wipe down"
    ]
  },
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    description: "Complete interior cleaning including seats, carpets, and console",
    price: "$99.99",
    duration: "2 hours",
    features: [
      "Thorough vacuum of all surfaces",
      "Seats and carpet shampooing",
      "Dashboard and console cleaning",
      "Door panel cleaning",
      "Interior window cleaning",
      "Air vent cleaning and sanitizing"
    ]
  },
  {
    id: "premium-detailing",
    title: "Premium Detailing",
    description: "Comprehensive interior and exterior detailing with wax protection",
    price: "$149.99",
    duration: "3 hours",
    features: [
      "Complete exterior hand wash",
      "Clay bar treatment",
      "Hand wax application",
      "Full interior vacuum",
      "Interior surface cleaning",
      "Leather conditioning (if applicable)",
      "Carpet shampooing",
      "Complete window cleaning"
    ]
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description: "Long-lasting protection with premium ceramic coating",
    price: "$299.99+",
    duration: "6-8 hours",
    features: [
      "Paint correction",
      "Surface preparation",
      "Premium ceramic coating application",
      "Up to 2 years of protection",
      "Hydrophobic properties",
      "UV protection",
      "Chemical resistance",
      "Enhanced gloss and shine"
    ]
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    description: "Restore your vehicle's finish by removing swirls, scratches, and oxidation",
    price: "$199.99+",
    duration: "4-6 hours",
    features: [
      "Multi-stage polishing process",
      "Swirl mark removal",
      "Light scratch removal",
      "Oxidation removal",
      "Restoration of paint clarity",
      "Enhance gloss and shine",
      "Sealant application"
    ]
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    description: "Restore cloudy, yellowed headlights to clear condition",
    price: "$79.99",
    duration: "1 hour",
    features: [
      "Remove oxidation and yellowing",
      "Multi-step wet sanding process",
      "Polishing and clarity restoration",
      "UV protective coating",
      "Improved night visibility",
      "Enhanced vehicle appearance"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Detailing Services
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Professional car detailing services to keep your vehicle looking its best
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {servicesData.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="px-6 py-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                    <p className="text-2xl font-bold text-blue-600">{service.price}</p>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">Duration: {service.duration}</p>
                  <p className="mt-4 text-gray-600">{service.description}</p>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900">What&apos;s Included</h3>
                    <ul className="mt-3 space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <Link
                      href={`/appointments?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Not sure which service is right for you?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Contact us for a personalized recommendation based on your vehicle&apos;s needs.
          </p>
          <div className="mt-6">
            <Link
              href="/appointments"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 