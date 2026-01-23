import { Phone, Mail, MapPin, Building2, Award, TrendingUp, Home, Users, Star, MessageCircle, Clock, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function RealtorLanding() {
  const services = [
    { icon: Home, title: 'Продажа квартир', description: 'Помогу продать вашу недвижимость по лучшей цене' },
    { icon: Building2, title: 'Покупка жилья', description: 'Подберу идеальную квартиру под ваши требования' },
    { icon: Users, title: 'Консультации', description: 'Бесплатная консультация по всем вопросам' },
    { icon: TrendingUp, title: 'Оценка недвижимости', description: 'Профессиональная оценка рыночной стоимости' },
  ];

  const achievements = [
    { number: '150+', label: 'Успешных сделок' },
    { number: '8 лет', label: 'Опыт работы' },
    { number: '98%', label: 'Довольных клиентов' },
    { number: '24/7', label: 'На связи' },
  ];

  const reviews = [
    {
      name: 'Михаил Соколов',
      rating: 5,
      text: 'Ирина помогла продать квартиру за 2 недели! Профессиональный подход, всегда на связи. Рекомендую!',
      date: '15 января 2026',
    },
    {
      name: 'Елена Морозова',
      rating: 5,
      text: 'Искали квартиру 3 месяца безрезультатно. Ирина нашла идеальный вариант за неделю. Спасибо огромное!',
      date: '10 января 2026',
    },
    {
      name: 'Дмитрий Волков',
      rating: 5,
      text: 'Отличный специалист! Помогла с оформлением документов, провела через всю сделку. Очень довольны.',
      date: '5 января 2026',
    },
  ];

  const portfolio = [
    {
      image: 'https://trizio.ru/img-srv01/082017/img_post/top_469.jpg',
      title: 'Квартира для молодой семьи',
      status: 'Продано за 3 дня',
      price: '8.5 млн ₽',
      story: 'Семья с новорожденным искала квартиру у метро. Нашла идеальную новостройку с детской площадкой - переехали через неделю!',
    },
    {
      image: 'https://www.eremont.ru/gallery/apartments/104-odnokomnatnaya-kvartira-dlya-molodoy-supruzheskoy-pary/photos/fhd/belosnezhnaya-tumbochka-s-uzorom-v-polosku-dlya-prikhozhey.jpg',
      title: 'Срочная продажа - успели!',
      status: 'Продано за 1 неделю',
      price: '12.8 млн ₽',
      story: 'Клиенту срочно нужны были деньги. Организовала 15 показов за 5 дней, нашла покупателя по полной цене!',
    },
    {
      image: 'https://images.unsplash.com/photo-1612419299101-6c294dc2901d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYXBhcnRtZW50JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3Njg3NDU0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'С котиками - без проблем!',
      status: 'Продано',
      price: '6.2 млн ₽',
      story: 'Семье с тремя котами везде отказывали. Нашла понимающего собственника и уютную квартиру с балконом!',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-orange-600" />
              <span className="text-xl font-bold text-orange-600">Этажи</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-gray-700 hover:text-orange-600 transition">Обо мне</a>
              <a href="#services" className="text-sm text-gray-700 hover:text-orange-600 transition">Услуги</a>
              <a href="#portfolio" className="text-sm text-gray-700 hover:text-orange-600 transition">Портфолио</a>
              <a href="#reviews" className="text-sm text-gray-700 hover:text-orange-600 transition">Отзывы</a>
              <a href="#contact" className="text-sm text-gray-700 hover:text-orange-600 transition">Контакты</a>
            </nav>
            <Button className="bg-orange-600 hover:bg-orange-700" onClick={() => window.open('tel:+79119016396', '_self')}>
              <Phone className="w-4 h-4 mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-orange-100 rounded-full text-sm text-orange-700 mb-4">
                Менеджер отдела продаж
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Черешенко Ирина
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Помогу найти квартиру вашей мечты или продать недвижимость по лучшей цене в Санкт-Петербурге
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <Award className="w-5 h-5 text-orange-600" />
                  <span>8 лет опыта</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                  <span>150+ сделок</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 text-orange-600 fill-orange-600" />
                  <span>Рейтинг 4.9</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" onClick={() => window.open('https://t.me/IrinaChereshenko', '_blank')}>
                  <Send className="w-5 h-5 mr-2" />
                  Написать в Telegram
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.open('tel:+79119016396', '_self')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Позвонить
                </Button>
              </div>
              <div className="p-4 bg-white/40 backdrop-blur-sm rounded-lg border border-orange-200">
                <p className="text-base text-gray-700">
                  Покупка новостройки с нами бесплатна!
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://sun9-10.userapi.com/s/v1/ig2/hVeqEQ0cjOdW3xjUu3KwQ9YEQWe-L9eIcFUqHlq0I7V9fmjDjqL6Efc8NbKZyJRhzDIbdArhMMHthUkYxOtFAwou.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280,1080x1920,1280x2276,1440x2560&from=bu&cs=1440x0"
                  alt="Анна Петрова"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{item.number}</div>
                <div className="text-sm text-orange-100">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Обо мне
            </h2>
            <p className="text-lg text-gray-600">
              Я профессиональный риелтор с 8-летним опытом работы на рынке недвижимости Санкт-Петербурга.
              Моя специализация — помощь в покупке и продаже квартир. Я знаю рынок изнутри и всегда
              нахожу оптимальные решения для своих клиентов.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-orange-50 rounded-xl">
              <CheckCircle className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Индивидуальный подход</h3>
              <p className="text-sm text-gray-600">
                Каждый клиент уникален, поэтому я подбираю решения именно под ваши потребности
              </p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl">
              <Clock className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Всегда на связи</h3>
              <p className="text-sm text-gray-600">
                Отвечаю на звонки и сообщения 24/7. Вы всегда будете в курсе всех этапов сделки
              </p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl">
              <Award className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Только честно</h3>
              <p className="text-sm text-gray-600">
                Никаких скрытых комиссий. Прозрачная работа и понятные условия сотрудничества
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Мои услуги
            </h2>
            <p className="text-lg text-gray-600">
              Полный спектр услуг по работе с недвижимостью
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <service.icon className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Истории успеха
            </h2>
            <p className="text-lg text-gray-600">
              Каждая сделка — это особенная история
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    {item.status}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-lg text-orange-600 font-semibold mb-2">{item.price}</p>
                <p className="text-sm text-gray-600 italic">{item.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-lg text-gray-600">
              Что говорят обо мне мои клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы найти свою квартиру?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Свяжитесь со мной любым удобным способом. Звоните в лбое время! 💫
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Phone className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-sm text-orange-100 mb-2">Телефоны</div>
              <a href="tel:+79119016396" className="text-white font-semibold block hover:text-orange-200">+7 (911) 901-63-96</a>
              <a href="tel:+79211007631" className="text-white font-semibold block hover:text-orange-200">+7 (921) 100-76-31</a>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Send className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-sm text-orange-100 mb-2">Telegram</div>
              <a href="https://t.me/IrinaChereshenko" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-orange-200">@IrinaChereshenko</a>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-sm text-orange-100 mb-2">Офис</div>
              <div className="text-white font-semibold">пр. Лиговский, 153 А, этаж 5</div>
              <div className="text-orange-100 text-sm mt-1">Метро "Обводный канал"</div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Building2 className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-sm text-orange-100 mb-2">Сайт агентства</div>
              <a href="https://spb.etagi.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-orange-200">spb.etagi.com</a>
            </div>
          </div>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" onClick={() => window.open('https://t.me/IrinaChereshenko', '_blank')}>
            <Send className="w-5 h-5 mr-2" />
            Написать сейчас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Building2 className="w-6 h-6 text-orange-500" />
              <span className="text-lg font-bold text-white">Этажи</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2026 Черешенко Ирина. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}