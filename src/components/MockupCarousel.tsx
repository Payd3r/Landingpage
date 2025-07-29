interface MockupCarouselProps {
  projectTitle: string;
  projectId: string;
}

const MockupCarousel = ({ projectTitle, projectId }: MockupCarouselProps) => {
  // Mappa per le immagini dei mockup
  const getMockupImages = (projectId: string) => {
    const mockupMap: Record<string, string[]> = {
      'project-1': [
        '/carouselMockup/I_Gladiatori/desktop.jpg',
        '/carouselMockup/I_Gladiatori/mobile.jpg',
        '/carouselMockup/I_Gladiatori/tablet.jpg'
      ],
      'project-2': [
        '/carouselMockup/Betta47/desktop.jpg',
        '/carouselMockup/Betta47/mobile.jpg',
        '/carouselMockup/Betta47/tablet.jpg'
      ],
      'project-3': [
        '/carouselMockup/Le_chic/desktop.jpg',
        '/carouselMockup/Le_chic/mobile.jpg',
        '/carouselMockup/Le_chic/tablet.jpg'
      ],
    };
    return mockupMap[projectId] || [];
  };

  const mockupImages = getMockupImages(projectId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockupImages.map((mockup, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: `url(${mockup})` }}>
            {/* Fallback se l'immagine non carica */}
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-slate-900 text-6xl font-bold mb-2">
                  {projectTitle.charAt(0)}
                </div>
                <p className="text-slate-700 font-medium">Mockup {index + 1}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MockupCarousel; 