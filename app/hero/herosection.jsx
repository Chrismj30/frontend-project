import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "/components/ui/card";

export default function HeroSection() {
  return (
    <>
     <div className="max-w-7xl mx-auto mb-13">
          <div className="flex items-center justify-between mb-4">
          <h1
  style={{
    fontSize: "3.0rem", // Adjust the font size as needed
    fontWeight: "600", // Matches 'font-light' equivalent
    letterSpacing: "0.05em", // Matches 'tracking-wide' equivalent
    color: "#4a4a4a", // Matches 'text-gray-800' equivalent
    marginBottom:"20px"
  }}
>
  Hydration Essentials
</h1>

            <button className="bg-[#00B4D8] hover:bg-[#0096c7] text-white px-8 py-2.5 rounded-md transition duration-200">
              VIEW MORE
            </button>
          </div>
          <p className="text-lg text-gray-600 font-light">
            Discover Our Range of Premium Water Bottles
          </p>
        </div>
    <div className="flex flex-col items-center px-6 py-12 bg-gray-50">
      
   

      {/* Parent container */}
      <div className="w-full text-center">
        
        {/* Card 1 */}
        <Card
          style={{
            display: 'inline-block',
            width: '500px', // Custom width
            height: '539px', // Custom height
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow effect
            borderRadius: '12px', // Custom border radius
            marginRight: '26px', // Space between cards
            marginLeft: '20px', // Space between cards
          }}
          className="hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <CardHeader className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-lg overflow-hidden border border-gray-300 mb-4">
              <Image
                src="/rainbow600.jpg" // Card 1 Image
                alt="Rainbow 600"
                width={420}
                height={490}
                className="object-contain"
              />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <CardTitle className="text-lg font-medium text-gray-800 mb-4">
              Rainbow 600
            </CardTitle>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Learn More
            </button>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card
          style={{
            display: 'inline-block',
            width: '500px', // Custom width
            height: '539px', // Custom height
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow effect
            borderRadius: '12px', // Custom border radius
            marginRight: '26px', // Space between cards
          }}
          className="hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <CardHeader className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-lg overflow-hidden border border-gray-300 mb-4">
              <Image
                src="/rio650.jpg" // Card 2 Image
                alt="Rio 650"
                width={420}
                height={490}
                className="object-contain"
              />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <CardTitle className="text-lg font-medium text-gray-800 mb-4">
              Rio 650
            </CardTitle>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Learn More
            </button>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card
          style={{
            display: 'inline-block',
            width: '500px', // Custom width
            height: '539px', // Custom height
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow effect
            borderRadius: '12px', // Custom border radius
            marginRight: '16px', // Space between cards
          }}
          className="hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <CardHeader className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-lg overflow-hidden border border-gray-300 mb-4">
              <Image
                src="/bigbull300.jpg" // Card 3 Image
                alt="Big Bull 1300"
                width={420}
                height={490}
                className="object-contain"
              />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <CardTitle className="text-lg font-medium text-gray-800 mb-4">
              Big Bull 1300
            </CardTitle>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Learn More
            </button>
          </CardContent>
        </Card>

        {/* Card 4 */}
        <Card
          style={{
            display: 'inline-block',
            width: '500px', // Custom width
            height: '539px', // Custom height
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow effect
            borderRadius: '12px', // Custom border radius
            marginRight: '26px', // Space between cards
            marginLeft: '16px', // Space between cards
            marginTop:'15px',
            paddingT:'10px'
          }}
          className="hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <CardHeader className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-lg overflow-hidden border border-gray-300 mb-4">
              <Image
                src="/rome600.jpg" // Card 4 Image
                alt="Rome 600"
                width={420}
                height={490}
                className="object-contain"
              />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <CardTitle className="text-lg font-medium text-gray-800 mb-4 my-3">
              Rome 600
            </CardTitle>
            <button className="bg-blue-500 text-white px-6 py-2 my-3 rounded-md hover:bg-blue-600 transition duration-200">
              Learn More
            </button>
          </CardContent>
        </Card>

        {/* Card 5 */}
        <Card
          style={{
            display: 'inline-block',
            width: '500px', // Custom width
            height: '539px', // Custom height
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow effect
            borderRadius: '12px', // Custom border radius
            marginRight: '26px', // Space between cards
          }}
          className="hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <CardHeader className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-lg overflow-hidden border border-gray-300 mb-4">
              <Image
                src="/rainbow600.jpg" // Card 5 Image
                alt="Rainbow 600"
                width={420}
                height={490}
                className="object-contain"
              />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <CardTitle className="text-lg font-medium text-gray-800 mb-4">
              Rainbow 600
            </CardTitle>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Learn More
            </button>
          </CardContent>
        </Card>
        <Card
          style={{
            display: 'inline-block',
            width: '500px', // Custom width
            height: '539px', // Custom height
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow effect
            borderRadius: '12px', // Custom border radius
            marginRight: '16px', // Space between cards
            marginBottom: '16px', // Space
          }}
          className="hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <CardHeader className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-lg overflow-hidden border border-gray-300 mb-4">
              <Image
                src="/rio650.jpg" // Card 2 Image
                alt="Rio 650"
                width={420}
                height={490}
                className="object-contain"
              />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <CardTitle className="text-lg font-medium text-gray-800 mb-4">
              Rio 650
            </CardTitle>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Learn More
            </button>
          </CardContent>
        </Card>
      </div>

    </div>
    </>
  );
}
