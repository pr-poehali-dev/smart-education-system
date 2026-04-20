const projects = [
  {
    title: 'Исследование экосистем',
    student: 'Анна Петрова',
    grade: '10 класс',
    description: 'Научный проект о влиянии городской застройки на локальные экосистемы. Призёр региональной олимпиады.',
    tags: ['Биология', 'Наука', 'Олимпиада'],
    accent: 'border-amber-400',
    tagColor: 'bg-amber-400/10 text-amber-300',
    emoji: '🌿',
  },
  {
    title: 'Мобильное приложение',
    student: 'Иван Соколов',
    grade: '11 класс',
    description: 'Разработал приложение для расписания школы. Более 200 пользователей среди учеников и учителей.',
    tags: ['Программирование', 'Дизайн', 'IT'],
    accent: 'border-cyan-400',
    tagColor: 'bg-cyan-400/10 text-cyan-300',
    emoji: '💻',
  },
  {
    title: 'Художественная выставка',
    student: 'Полина Новикова',
    grade: '9 класс',
    description: 'Серия работ "Город и человек". Участник городской выставки молодых художников 2024 года.',
    tags: ['Живопись', 'Творчество', 'Выставка'],
    accent: 'border-rose-400',
    tagColor: 'bg-rose-400/10 text-rose-300',
    emoji: '🎨',
  },
  {
    title: 'Историческое эссе',
    student: 'Максим Фёдоров',
    grade: '10 класс',
    description: 'Работа "Роль молодёжи в истории ХХ века" заняла 1-е место на всероссийском конкурсе.',
    tags: ['История', 'Литература', '1 место'],
    accent: 'border-green-400',
    tagColor: 'bg-green-400/10 text-green-300',
    emoji: '📚',
  },
  {
    title: 'Робототехника',
    student: 'Артём Зайцев',
    grade: '8 класс',
    description: 'Собрал автономного робота-сортировщика. Победитель городского чемпионата по робототехнике.',
    tags: ['Инженерия', 'Робот', 'Победитель'],
    accent: 'border-purple-400',
    tagColor: 'bg-purple-400/10 text-purple-300',
    emoji: '🤖',
  },
  {
    title: 'Музыкальный альбом',
    student: 'Соня Крылова',
    grade: '11 класс',
    description: 'Авторский EP из 5 треков, записанный в школьной студии. Более 10 000 прослушиваний онлайн.',
    tags: ['Музыка', 'Творчество', 'Автор'],
    accent: 'border-yellow-400',
    tagColor: 'bg-yellow-400/10 text-yellow-300',
    emoji: '🎵',
  },
];

export default function StudentsSection() {
  return (
    <section className="bg-neutral-950 py-24 px-8 md:px-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-amber-400/60 mb-4">Работы учеников</p>
          <h2 className="text-4xl font-light text-white md:text-5xl">
            Таланты и проекты —<br />
            <span className="text-white/50">результаты, которыми мы гордимся</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-neutral-900 border-t-2 ${project.accent} p-8 group hover:bg-neutral-800 transition-colors duration-300`}
            >
              <div className="text-4xl mb-4">{project.emoji}</div>

              <h3 className="text-lg font-medium text-white mb-1">{project.title}</h3>
              <p className="text-white/40 text-sm mb-4">{project.student} · {project.grade}</p>

              <p className="text-white/70 text-sm leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className={`text-xs px-3 py-1 rounded-full ${project.tagColor}`}>
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
