export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#3A5AC9' }}>
              <span className="text-white font-bold text-sm">СР</span>
            </div>
            <span className="text-xl font-bold text-gray-900">СРДО</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/servisy" className="text-gray-600 hover:text-gray-900 font-medium transition">Сервисы</a>
            <a href="/tr-ts" className="text-gray-600 hover:text-gray-900 font-medium transition">ТР ТС</a>
            <a href="/tn-ved" className="text-gray-600 hover:text-gray-900 font-medium transition">ТН ВЭД</a>
          </nav>
          <a
            href="/login"
            className="px-5 py-2.5 rounded-lg font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: '#3A5AC9' }}
          >
            Войти
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-wider mb-6" style={{ color: '#3A5AC9' }}>
                Сервис разрешительной документации
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-gray-900 mb-6 leading-[1.1]">
                Всё для сертификации
                <span className="block" style={{ color: '#3A5AC9' }}>в одном месте</span>
              </h1>

              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                Подберите код ТН ВЭД, проверьте требования сертификации и маркировки. Бесплатные онлайн-инструменты для бизнеса.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="px-8 py-4 rounded-xl text-lg font-semibold text-white transition hover:opacity-90 text-center"
                  style={{ backgroundColor: '#3A5AC9' }}
                >
                  Начать работу
                </a>
                <a
                  href="/o-servise"
                  className="px-8 py-4 rounded-xl text-lg font-semibold text-gray-700 border-2 border-gray-200 hover:border-gray-300 transition text-center"
                >
                  О сервисе
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-500">регламентов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">16 000+</div>
                  <div className="text-sm text-gray-500">кодов ТН ВЭД</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-500">онлайн</div>
                </div>
              </div>
            </div>

            {/* Right - Clean geometric illustration */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Main card stack */}
                <div className="relative w-[420px] h-[420px]">
                  {/* Background decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-3xl bg-slate-100"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 rounded-2xl bg-slate-50"></div>

                  {/* Main card */}
                  <div className="absolute top-12 left-12 w-[340px] bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-8 border border-slate-100">
                    {/* Card header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#3A5AC9' }}>
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Сертификация</div>
                        <div className="text-sm text-gray-500">Проверка требований</div>
                      </div>
                    </div>

                    {/* Mock form */}
                    <div className="space-y-4">
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="text-xs text-gray-400 mb-1">Код ТН ВЭД</div>
                        <div className="font-medium text-gray-900">6203 42 310 0</div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="text-xs text-gray-400 mb-1">Товар</div>
                        <div className="font-medium text-gray-900">Брюки мужские из хлопка</div>
                      </div>
                      <div className="rounded-xl p-4 border-2 border-dashed" style={{ borderColor: '#3A5AC9', backgroundColor: 'rgba(58, 90, 201, 0.05)' }}>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5" style={{ color: '#3A5AC9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-medium" style={{ color: '#3A5AC9' }}>ТР ТС 017/2011</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-2 right-8 px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg" style={{ backgroundColor: '#3A5AC9' }}>
                    Бесплатно
                  </div>

                  {/* Small accent */}
                  <div className="absolute bottom-8 -right-4 w-16 h-16 rounded-2xl" style={{ backgroundColor: '#3A5AC9', opacity: 0.1 }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Выберите задачу
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Бесплатные онлайн-инструменты для работы с разрешительной документацией
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Service 1 */}
            <a href="/podbor-tn-ved" className="group bg-slate-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-slate-200 transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white group-hover:bg-slate-50 transition" style={{ color: '#3A5AC9' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Подобрать код ТН ВЭД
              </h3>
              <p className="text-gray-500 text-sm">
                Найдите правильный код для вашего товара из 16 000+ позиций
              </p>
            </a>

            {/* Service 2 */}
            <a href="/nuzhna-li-sertifikaciya" className="group bg-slate-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-slate-200 transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white group-hover:bg-slate-50 transition" style={{ color: '#3A5AC9' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Проверить сертификацию
              </h3>
              <p className="text-gray-500 text-sm">
                Узнайте какие документы нужны для вашего товара
              </p>
            </a>

            {/* Service 3 */}
            <a href="/chestniy-znak" className="group bg-slate-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-slate-200 transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white group-hover:bg-slate-50 transition" style={{ color: '#3A5AC9' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Проверить маркировку
              </h3>
              <p className="text-gray-500 text-sm">
                Нужна ли маркировка Честный знак для товара
              </p>
            </a>

            {/* Service 4 */}
            <a href="/tr-ts" className="group bg-slate-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-slate-200 transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white group-hover:bg-slate-50 transition" style={{ color: '#3A5AC9' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Каталог ТР ТС
              </h3>
              <p className="text-gray-500 text-sm">
                50+ технических регламентов с описанием требований
              </p>
            </a>

            {/* Service 5 */}
            <a href="/nuzhno-li-sgr" className="group bg-slate-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-slate-200 transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white group-hover:bg-slate-50 transition" style={{ color: '#3A5AC9' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Проверить СГР
              </h3>
              <p className="text-gray-500 text-sm">
                Нужна ли государственная регистрация продукции
              </p>
            </a>

            {/* Service 6 */}
            <a href="/kalkulyator" className="group bg-slate-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-slate-200 transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white group-hover:bg-slate-50 transition" style={{ color: '#3A5AC9' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Рассчитать стоимость
              </h3>
              <p className="text-gray-500 text-sm">
                Калькулятор стоимости сертификации онлайн
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#3A5AC9' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Нужна помощь с документами?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Оставьте заявку и мы поможем подобрать необходимые сертификаты для вашей продукции
          </p>
          <a
            href="/zayavka"
            className="inline-block bg-white px-10 py-4 rounded-xl text-lg font-bold transition hover:bg-slate-50"
            style={{ color: '#3A5AC9' }}
          >
            Оставить заявку
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#3A5AC9' }}>
                <span className="text-white font-bold text-sm">СР</span>
              </div>
              <div>
                <div className="font-bold">СРДО</div>
                <div className="text-slate-500 text-sm">Сервис разрешительной документации</div>
              </div>
            </div>

            <div className="flex items-center gap-8 text-slate-400">
              <a href="/servisy" className="hover:text-white transition">Сервисы</a>
              <a href="/tr-ts" className="hover:text-white transition">ТР ТС</a>
              <a href="/tn-ved" className="hover:text-white transition">ТН ВЭД</a>
              <a href="/kontakty" className="hover:text-white transition">Контакты</a>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
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
