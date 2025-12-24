export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="10" fill="#1e3a8a"/>
              <text x="18" y="24" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="system-ui">СР</text>
            </svg>
            <span className="text-xl font-bold text-gray-900">СРДО</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-blue-900 font-medium transition">Сервисы</a>
            <a href="/tr-ts" className="text-gray-600 hover:text-blue-900 font-medium transition">ТР ТС</a>
            <a href="/tn-ved" className="text-gray-600 hover:text-blue-900 font-medium transition">ТН ВЭД</a>
            <a href="/kontakty" className="text-gray-600 hover:text-blue-900 font-medium transition">Контакты</a>
          </nav>
          <a href="/login" className="px-5 py-2.5 rounded-lg font-medium text-white bg-blue-900 hover:bg-blue-800 transition">
            Войти
          </a>
        </div>
      </header>

      {/* Hero Section with gradient background */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
        {/* Decorative background pattern */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-[128px] opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Бесплатный онлайн-сервис</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Сервис разрешительной
              <span className="block text-blue-300">документации онлайн</span>
            </h1>

            <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
              Подберите код ТН ВЭД, проверьте требования сертификации,
              маркировки и СГР за несколько кликов
            </p>

            {/* Search / Action */}
            <div className="max-w-xl mx-auto mb-12">
              <div className="bg-white rounded-2xl p-2 shadow-2xl shadow-black/20 flex gap-2">
                <input
                  type="text"
                  placeholder="Введите название товара или код ТН ВЭД..."
                  className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none rounded-xl"
                />
                <button className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-xl transition whitespace-nowrap">
                  Проверить
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
                <div className="text-blue-200/70 text-sm">Техрегламентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">16 000+</div>
                <div className="text-blue-200/70 text-sm">Кодов ТН ВЭД</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">1 400+</div>
                <div className="text-blue-200/70 text-sm">Органов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
                <div className="text-blue-200/70 text-sm">Онлайн</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Что вам нужно сделать?
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Выберите задачу и получите результат за несколько минут
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Service 1 */}
            <a href="/podbor-tn-ved" className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-blue-900 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Подобрать код ТН ВЭД
              </h3>
              <p className="text-gray-600">
                Найдите правильный код для вашего товара из 16 000+ позиций
              </p>
              <div className="mt-4 text-blue-900 font-medium group-hover:underline">
                Начать подбор →
              </div>
            </a>

            {/* Service 2 */}
            <a href="/nuzhna-li-sertifikaciya" className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-emerald-700 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Нужна ли сертификация?
              </h3>
              <p className="text-gray-600">
                Проверьте какие документы требуются для вашего товара
              </p>
              <div className="mt-4 text-emerald-700 font-medium group-hover:underline">
                Проверить →
              </div>
            </a>

            {/* Service 3 */}
            <a href="/chestniy-znak" className="group relative bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 hover:border-violet-300 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-violet-700 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Честный знак
              </h3>
              <p className="text-gray-600">
                Проверьте нужна ли обязательная маркировка товара
              </p>
              <div className="mt-4 text-violet-700 font-medium group-hover:underline">
                Проверить →
              </div>
            </a>

            {/* Service 4 */}
            <a href="/tr-ts" className="group relative bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 hover:border-amber-300 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-amber-600 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Каталог ТР ТС
              </h3>
              <p className="text-gray-600">
                50+ технических регламентов Таможенного союза
              </p>
              <div className="mt-4 text-amber-700 font-medium group-hover:underline">
                Открыть каталог →
              </div>
            </a>

            {/* Service 5 */}
            <a href="/nuzhno-li-sgr" className="group relative bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl border border-rose-100 hover:border-rose-300 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-rose-600 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Нужно ли СГР?
              </h3>
              <p className="text-gray-600">
                Проверьте требуется ли гос. регистрация продукции
              </p>
              <div className="mt-4 text-rose-600 font-medium group-hover:underline">
                Проверить →
              </div>
            </a>

            {/* Service 6 */}
            <a href="/kalkulyator" className="group relative bg-gradient-to-br from-cyan-50 to-sky-50 p-8 rounded-2xl border border-cyan-100 hover:border-cyan-300 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-cyan-600 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Калькулятор
              </h3>
              <p className="text-gray-600">
                Рассчитайте стоимость сертификации онлайн
              </p>
              <div className="mt-4 text-cyan-700 font-medium group-hover:underline">
                Рассчитать →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Нужна помощь с документами?
          </h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Оставьте заявку и наши специалисты помогут оформить все необходимые сертификаты
          </p>
          <a
            href="/zayavka"
            className="inline-block bg-white text-blue-900 px-10 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition shadow-xl"
          >
            Оставить заявку
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect width="36" height="36" rx="10" fill="#1e3a8a"/>
                  <text x="18" y="24" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="system-ui">СР</text>
                </svg>
                <span className="text-xl font-bold">СРДО</span>
              </div>
              <p className="text-gray-400 text-sm">
                Сервис разрешительной документации онлайн.
                Бесплатные инструменты для бизнеса.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Сервисы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/podbor-tn-ved" className="hover:text-white transition">Подбор ТН ВЭД</a></li>
                <li><a href="/nuzhna-li-sertifikaciya" className="hover:text-white transition">Нужна ли сертификация?</a></li>
                <li><a href="/chestniy-znak" className="hover:text-white transition">Честный знак</a></li>
                <li><a href="/kalkulyator" className="hover:text-white transition">Калькулятор</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Каталоги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/tr-ts" className="hover:text-white transition">ТР ТС / ТР ЕАЭС</a></li>
                <li><a href="/tn-ved" className="hover:text-white transition">Коды ТН ВЭД</a></li>
                <li><a href="/organy" className="hover:text-white transition">Органы сертификации</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:info@srdo.ru" className="hover:text-white transition">info@srdo.ru</a></li>
                <li><a href="https://t.me/srdo_ru" className="hover:text-white transition">Telegram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© 2025 СРДО. ООО «Бизнес Среда». Все права защищены.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition">Политика конфиденциальности</a>
              <a href="/terms" className="hover:text-white transition">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
