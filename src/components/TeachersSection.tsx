const teachers = [
  {
    name: 'Елена Смирнова',
    subject: 'Математика',
    experience: '15 лет опыта',
    description: 'Автор методики визуального обучения алгебре. 98% учеников сдают ЕГЭ на 80+ баллов.',
    tags: ['ЕГЭ', 'Алгебра', 'Геометрия'],
    color: 'border-blue-400',
    tagColor: 'bg-blue-400/10 text-blue-300',
  },
  {
    name: 'Дмитрий Волков',
    subject: 'Физика',
    experience: '10 лет опыта',
    description: 'Победитель олимпиад всероссийского уровня. Специализируется на углублённом изучении физики.',
    tags: ['Олимпиады', 'ЕГЭ', 'Физика'],
    color: 'border-purple-400',
    tagColor: 'bg-purple-400/10 text-purple-300',
  },
  {
    name: 'Мария Козлова',
    subject: 'Русский язык',
    experience: '12 лет опыта',
    description: 'Эксперт ЕГЭ по русскому языку. Авторские курсы по развитию речи и грамотности.',
    tags: ['ЕГЭ', 'Сочинение', 'Грамматика'],
    color: 'border-rose-400',
    tagColor: 'bg-rose-400/10 text-rose-300',
  },
];

export default function TeachersSection() {
  return (
    <section className="bg-neutral-950 py-24 px-8 md:px-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">Наши педагоги</p>
          <h2 className="text-4xl font-light text-white md:text-5xl">
            Опытные учителя —<br />
            <span className="text-white/50">вдохновляем и учим</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className={`bg-neutral-900 border-t-2 ${teacher.color} p-8 group hover:bg-neutral-800 transition-colors duration-300`}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-neutral-700 mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center">
                    <span className="text-2xl text-white/60">{teacher.name[0]}</span>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white">{teacher.name}</h3>
                <p className="text-white/50 text-sm mt-1">{teacher.subject} · {teacher.experience}</p>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">{teacher.description}</p>

              <div className="flex flex-wrap gap-2">
                {teacher.tags.map((tag) => (
                  <span key={tag} className={`text-xs px-3 py-1 rounded-full ${teacher.tagColor}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
