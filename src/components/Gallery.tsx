import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Campaign Rally',
      title: 'Tech Innovation Summit'
    },
    {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Student Engagement',
      title: 'Student-Centered Solutions'
    },
    {
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Campaign Poster',
      title: 'Digital Transformation Vision'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Campaign Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing moments from Joel's campaign journey and vision for CITSA's technological future.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8"></div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-10 bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <div className="flex items-center space-x-4">
                    <button className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200">
                      <i className="fas fa-expand-alt"></i>
                    </button>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      <i className="fas fa-share-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Upload Section */}
        <div className="mt-16 text-center">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 hover:border-blue-500 transition-colors duration-300">
            <div className="text-gray-500 mb-4">
              <i className="fas fa-cloud-upload-alt text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Share Your Campaign Moments</h3>
              <p className="text-gray-400">
                Have photos from campaign events? Upload them to be featured in the gallery.
              </p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 mt-4">
              <i className="fas fa-plus mr-2"></i>
              Upload Photos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;