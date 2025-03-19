import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Basic Wash",
      description: "Exterior wash, tire cleaning, and windows",
      price: "$49.99",
      icon: "🚿"
    },
    {
      title: "Interior Detailing",
      description: "Complete interior cleaning including seats, carpets, and console",
      price: "$99.99",
      icon: "🧹"
    },
    {
      title: "Premium Detailing",
      description: "Comprehensive interior and exterior detailing with wax protection",
      price: "$149.99",
      icon: "✨"
    },
    {
      title: "Ceramic Coating",
      description: "Long-lasting protection with premium ceramic coating",
      price: "$299.99+",
      icon: "🛡️"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-blue-600 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                      <span className="block">Professional</span>
                      <span className="block text-blue-200">Car Detailing Services</span>
                    </h1>
                    <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Transform your vehicle with our premium detailing services. We use only the highest quality products and techniques to make your car look and feel brand new.
                    </p>
                    <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                      <Link 
                        href="/appointments"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Book Now
                      </Link>
                      <Link 
                        href="/services"
                        className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
                      >
                        See Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-blue-300 sm:h-72 md:h-96 lg:w-full lg:h-full relative">
            {/* We'll use a placeholder for now, but you should replace this with an actual car image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-800 text-5xl">
              🚗
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What We Offer
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Choose from our range of professional detailing services
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{service.description}</p>
                    <p className="mt-2 text-lg font-semibold text-blue-600">{service.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </p>
          </div>
          <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xl">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">John Doe</h4>
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">&ldquo;Incredible service! My car looks better than when I first bought it. Will definitely be coming back for regular maintenance.&rdquo;</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xl">AS</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Alice Smith</h4>
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">&ldquo;The attention to detail was amazing. They got stains out of my seats that I thought would never come out. Worth every penny!&rdquo;</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xl">RJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Robert Johnson</h4>
                  <div className="flex text-yellow-400">
                    {"★".repeat(4)}{"☆".repeat(1)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">&ldquo;Professional service and friendly staff. They did a great job on my SUV and were able to accommodate my schedule with short notice.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to give your car the care it deserves?</span>
            <span className="block text-blue-200">Book your appointment today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Schedule Now
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
