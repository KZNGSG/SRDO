export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#E84E53' }}>СРДО</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/servisy" className="text-gray-600 hover:text-gray-900 font-medium transition">Сервисы</a>
            <a href="/tr-ts" className="text-gray-600 hover:text-gray-900 font-medium transition">ТР ТС</a>
            <a href="/tn-ved" className="text-gray-600 hover:text-gray-900 font-medium transition">ТН ВЭД</a>
          </nav>
          <a href="/login" className="text-gray-600 hover:text-gray-900 font-medium transition">
            Войти
          </a>
        </div>
      </header>

      {/* Hero Section - Clean and Simple */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#E84E53' }}></span>
                <span className="text-sm text-gray-600 font-medium">Сервис разрешительной документации</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Документы для
                <span className="block" style={{ color: '#E84E53' }}>вашего бизнеса</span>
              </h1>

              <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                Подберите код ТН ВЭД, проверьте требования сертификации
                и маркировки за несколько кликов
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="px-8 py-4 rounded-xl text-lg font-semibold text-white transition hover:opacity-90"
                  style={{ backgroundColor: '#E84E53' }}
                >
                  Начать работу
                </a>
                <a
                  href="/o-servise"
                  className="px-8 py-4 rounded-xl text-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
                >
                  Узнать больше
                </a>
              </div>
            </div>

            {/* Right - Unique Geometric Pattern */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-[500px] h-[500px]">
                {/* Main geometric grid pattern - like the awesome square from promarkirui */}
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Row 0 */}
                  <rect x="0" y="0" width="45" height="45" rx="8" fill="#E84E53" opacity="0.9" />
                  <rect x="100" y="0" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />
                  <rect x="150" y="0" width="45" height="45" rx="8" fill="#3A5AC9" opacity="0.9" />
                  <rect x="250" y="0" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />
                  <rect x="350" y="0" width="45" height="45" rx="8" fill="#E84E53" opacity="0.9" />

                  {/* Row 1 */}
                  <rect x="50" y="50" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />
                  <rect x="150" y="50" width="45" height="45" rx="8" fill="#E84E53" opacity="0.9" />
                  <rect x="200" y="50" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />
                  <rect x="300" y="50" width="45" height="45" rx="8" fill="#3A5AC9" opacity="0.9" />

                  {/* Row 2 */}
                  <rect x="0" y="100" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />
                  <rect x="100" y="100" width="45" height="45" rx="8" fill="#3A5AC9" opacity="0.9" />
                  <rect x="250" y="100" width="45" height="45" rx="8" fill="#E84E53" opacity="0.9" />
                  <rect x="350" y="100" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />

                  {/* Row 3 */}
                  <rect x="50" y="150" width="45" height="45" rx="8" fill="#E84E53" opacity="0.9" />
                  <rect x="300" y="150" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />
                  <rect x="350" y="150" width="45" height="45" rx="8" fill="#3A5AC9" opacity="0.9" />

                  {/* Row 4 */}
                  <rect x="0" y="200" width="45" height="45" rx="8" fill="#3A5AC9" opacity="0.9" />
                  <rect x="100" y="200" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />
                  <rect x="250" y="200" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />
                  <rect x="350" y="200" width="45" height="45" rx="8" fill="#E84E53" opacity="0.9" />

                  {/* Row 5 */}
                  <rect x="50" y="250" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />
                  <rect x="150" y="250" width="45" height="45" rx="8" fill="#3A5AC9" opacity="0.9" />
                  <rect x="200" y="250" width="45" height="45" rx="8" fill="#E84E53" opacity="0.9" />
                  <rect x="300" y="250" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />

                  {/* Row 6 */}
                  <rect x="0" y="300" width="45" height="45" rx="8" fill="#E84E53" opacity="0.9" />
                  <rect x="100" y="300" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />
                  <rect x="200" y="300" width="45" height="45" rx="8" fill="#3A5AC9" opacity="0.9" />
                  <rect x="350" y="300" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />

                  {/* Row 7 */}
                  <rect x="50" y="350" width="45" height="45" rx="8" fill="#3A5AC9" opacity="0.9" />
                  <rect x="150" y="350" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />
                  <rect x="250" y="350" width="45" height="45" rx="8" fill="#E84E53" opacity="0.9" />
                  <rect x="300" y="350" width="45" height="45" rx="8" fill="#f3f4f6" opacity="0.6" />

                  {/* Center logo mark */}
                  <rect x="152" y="152" width="96" height="96" rx="20" fill="#E84E53" />
                  <text x="200" y="212" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="sans-serif">
                    СРДО
                  </text>
                </svg>

                {/* Floating accent squares */}
                <div className="absolute -top-4 right-20 w-12 h-12 rounded-xl" style={{ backgroundColor: '#3A5AC9' }}></div>
                <div className="absolute bottom-10 -left-4 w-8 h-8 rounded-lg" style={{ backgroundColor: '#E84E53' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Simple Cards */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Что вам нужно сделать?
            </h2>
            <p className="text-xl text-gray-500">
              Выберите задачу и начните работу
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Service 1 */}
            <a href="/podbor-tn-ved" className="group bg-white p-8 rounded-2xl border-2 border-transparent hover:border-[#3A5AC9] transition-all hover:shadow-lg">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#3A5AC9' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3A5AC9] transition">
                Подобрать код ТН ВЭД
              </h3>
              <p className="text-gray-500">
                Найдите правильный код для вашего товара
              </p>
            </a>

            {/* Service 2 */}
            <a href="/nuzhna-li-sertifikaciya" className="group bg-white p-8 rounded-2xl border-2 border-transparent hover:border-[#E84E53] transition-all hover:shadow-lg">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#E84E53' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E84E53] transition">
                Проверить сертификацию
              </h3>
              <p className="text-gray-500">
                Узнайте какие документы нужны для товара
              </p>
            </a>

            {/* Service 3 */}
            <a href="/chestniy-znak" className="group bg-white p-8 rounded-2xl border-2 border-transparent hover:border-[#1D1D1B] transition-all hover:shadow-lg">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#1D1D1B' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1D1D1B] transition">
                Проверить маркировку
              </h3>
              <p className="text-gray-500">
                Нужна ли маркировка Честный знак
              </p>
            </a>

            {/* Service 4 */}
            <a href="/tr-ts" className="group bg-white p-8 rounded-2xl border-2 border-transparent hover:border-[#3A5AC9] transition-all hover:shadow-lg">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#3A5AC9' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3A5AC9] transition">
                Каталог ТР ТС
              </h3>
              <p className="text-gray-500">
                50+ технических регламентов
              </p>
            </a>

            {/* Service 5 */}
            <a href="/nuzhno-li-sgr" className="group bg-white p-8 rounded-2xl border-2 border-transparent hover:border-[#E84E53] transition-all hover:shadow-lg">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#E84E53' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E84E53] transition">
                Проверить СГР
              </h3>
              <p className="text-gray-500">
                Нужна ли гос. регистрация
              </p>
            </a>

            {/* Service 6 */}
            <a href="/kalkulyator" className="group bg-white p-8 rounded-2xl border-2 border-transparent hover:border-[#3A5AC9] transition-all hover:shadow-lg">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#3A5AC9' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3A5AC9] transition">
                Рассчитать стоимость
              </h3>
              <p className="text-gray-500">
                Калькулятор сертификации
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#E84E53' }}>50+</div>
              <div className="text-gray-500">Техрегламентов</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#3A5AC9' }}>16K+</div>
              <div className="text-gray-500">Кодов ТН ВЭД</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#E84E53' }}>1400+</div>
              <div className="text-gray-500">Органов</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#3A5AC9' }}>24/7</div>
              <div className="text-gray-500">Онлайн</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#E84E53' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Нужна помощь с документами?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Оставьте заявку и мы поможем подобрать
            необходимые сертификаты для вашей продукции
          </p>
          <a
            href="/zayavka"
            className="inline-block bg-white px-10 py-4 rounded-xl text-lg font-bold transition hover:bg-gray-100"
            style={{ color: '#E84E53' }}
          >
            Оставить заявку
          </a>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-extrabold" style={{ color: '#E84E53' }}>СРДО</span>
              <span className="text-gray-500 text-sm">
                Сервис разрешительной документации
              </span>
            </div>

            <div className="flex items-center gap-8 text-gray-400">
              <a href="/servisy" className="hover:text-white transition">Сервисы</a>
              <a href="/tr-ts" className="hover:text-white transition">ТР ТС</a>
              <a href="/tn-ved" className="hover:text-white transition">ТН ВЭД</a>
              <a href="/kontakty" className="hover:text-white transition">Контакты</a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© 2025 СРДО. ООО «Бизнес Среда»</p>
            <a href="mailto:info@srdo.ru" className="hover:text-white transition">
              info@srdo.ru
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
