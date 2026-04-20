import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import TeachersSection from './TeachersSection';
import StudentsSection from './StudentsSection';

const teacherImages = [
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-2.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-1.jpg',
];

const studentImages = [
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-4.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-5.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<'teachers' | 'students'>('teachers');

  const images = activeTab === 'teachers' ? teacherImages : studentImages;

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeTab]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          {images.map((src, index) => (
            <div
              key={src}
              className={cn(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        {/* Tab switcher */}
        <div
          className={cn(
            'absolute top-10 left-1/2 -translate-x-1/2 z-20 flex gap-0 rounded-full border border-white/20 overflow-hidden backdrop-blur-sm transform transition-all duration-1000',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          )}
        >
          <button
            onClick={() => setActiveTab('teachers')}
            className={cn(
              'px-8 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300',
              activeTab === 'teachers'
                ? 'bg-white text-black'
                : 'bg-transparent text-white/70 hover:text-white'
            )}
          >
            Учителя
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={cn(
              'px-8 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300',
              activeTab === 'students'
                ? 'bg-white text-black'
                : 'bg-transparent text-white/70 hover:text-white'
            )}
          >
            Ученики
          </button>
        </div>

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-8 md:px-16">
            <div className="flex max-w-2xl flex-col gap-8">
              <div
                className={cn(
                  'transform transition-all duration-1000 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                {activeTab === 'teachers' ? (
                  <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-64 md:w-64">
                    <img
                      src="https://cdn.poehali.dev/projects/eb7f8a0d-c71e-436a-abd0-78037ddd7147/files/12aaf247-5dc2-4edc-989f-d96d9ef47821.jpg"
                      alt="Учитель"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-amber-400 shadow-2xl md:h-64 md:w-64">
                    <img
                      src="https://cdn.poehali.dev/projects/eb7f8a0d-c71e-436a-abd0-78037ddd7147/files/1d0742a0-1df4-4050-94d3-40676c2ad12d.jpg"
                      alt="Ученик"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div
                className={cn(
                  'transform transition-all duration-1000 delay-300 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                {activeTab === 'teachers' ? (
                  <div className="space-y-4">
                    <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                      Портфолио учителей
                    </p>
                    <p className="text-xl font-light text-white/80 md:text-2xl">
                      Опыт, методики и достижения педагогов
                    </p>
                    <p className="text-base text-white/60 max-w-md">
                      Здесь каждый учитель представляет свой профессиональный путь, авторские программы и успехи своих учеников.
                    </p>
                    <div className="pt-4">
                      <button className="px-8 py-3 border border-white text-white text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
                        Смотреть портфолио
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                      Портфолио учеников
                    </p>
                    <p className="text-xl font-light text-amber-300 md:text-2xl">
                      Работы, проекты и достижения
                    </p>
                    <p className="text-base text-white/60 max-w-md">
                      Творческие работы, исследовательские проекты и личные достижения учеников — здесь рождаются будущие профессионалы.
                    </p>
                    <div className="pt-4">
                      <button className="px-8 py-3 border border-amber-400 text-amber-400 text-sm font-medium tracking-widest uppercase hover:bg-amber-400 hover:text-black transition-all duration-300">
                        Смотреть работы
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'h-1 transition-all duration-300',
                currentIndex === index
                  ? activeTab === 'teachers' ? 'w-12 bg-white' : 'w-12 bg-amber-400'
                  : 'w-8 bg-white/40 hover:bg-white/60'
              )}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {activeTab === 'teachers' ? <TeachersSection /> : <StudentsSection />}
    </>
  );
}
