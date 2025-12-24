export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#E84E53' }}>СРДО</span>
            <span className="hidden sm:block text-sm leading-tight" style={{ color: '#8F8F8F' }}>
              Сервис разрешительной<br />документации
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            <a href="/servisy" className="text-gray-600 hover:text-[#E84E53] font-medium transition">Сервисы</a>
            <a href="/katalogi" className="text-gray-600 hover:text-[#E84E53] font-medium transition">Каталоги</a>
            <a href="/dlya-biznesa" className="text-gray-600 hover:text-[#E84E53] font-medium transition">Для бизнеса</a>
            <a href="/o-servise" className="text-gray-600 hover:text-[#E84E53] font-medium transition">О сервисе</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/login" className="hidden md:block text-gray-600 hover:text-[#E84E53] font-medium transition">Войти</a>
            <a href="/register" className="text-white px-5 py-2.5 rounded-lg font-semibold transition" style={{ backgroundColor: '#3A5AC9' }}>
              Регистрация
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: '#E84E53' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#3A5AC9' }}></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Платформа для бизнеса по всей России</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Все сервисы разрешительной
              <span className="block" style={{ color: '#E84E53' }}>
                документации
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Единая платформа: подбор ТН ВЭД, проверка маркировки, сертификация,
              СГР, техническая документация и 20+ других сервисов
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Что вам нужно? Например: сертификат на одежду, код ТН ВЭД..."
                  className="w-full px-6 py-4 pr-14 rounded-2xl text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-xl text-white" style={{ backgroundColor: '#E84E53' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="text-gray-500">Популярное:</span>
              <a href="/podbor-tn-ved" className="text-gray-300 hover:text-white underline underline-offset-2">Подбор ТН ВЭД</a>
              <a href="/sertifikat-tr-ts" className="text-gray-300 hover:text-white underline underline-offset-2">Сертификат ТР ТС</a>
              <a href="/chestniy-znak" className="text-gray-300 hover:text-white underline underline-offset-2">Честный знак</a>
              <a href="/nuzhna-li-sertifikaciya" className="text-gray-300 hover:text-white underline underline-offset-2">Нужна ли сертификация?</a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные сервисы
            </h2>
            <p className="text-xl text-gray-600">
              Бесплатные онлайн-инструменты для работы с документацией
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <a href="/podbor-tn-ved" className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#3A5AC9] hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: '#3A5AC9' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3A5AC9]">Подбор кода ТН ВЭД</h3>
              <p className="text-gray-600 text-sm mb-3">Найдите правильный код для вашего товара из 16 000+ позиций</p>
              <span className="text-sm font-medium" style={{ color: '#3A5AC9' }}>Бесплатно →</span>
            </a>

            {/* Service 2 */}
            <a href="/nuzhna-li-sertifikaciya" className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#E84E53] hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: '#E84E53' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E84E53]">Нужна ли сертификация?</h3>
              <p className="text-gray-600 text-sm mb-3">Определите какие документы нужны для вашей продукции</p>
              <span className="text-sm font-medium" style={{ color: '#E84E53' }}>Проверить →</span>
            </a>

            {/* Service 3 */}
            <a href="/chestniy-znak" className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#3A5AC9] hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: '#1D1D1B' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3A5AC9]">Проверка Честный знак</h3>
              <p className="text-gray-600 text-sm mb-3">Проверьте нужна ли маркировка для вашего товара</p>
              <span className="text-sm font-medium" style={{ color: '#3A5AC9' }}>Проверить →</span>
            </a>

            {/* Service 4 */}
            <a href="/kalkulyator" className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#E84E53] hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: '#E84E53' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E84E53]">Калькулятор стоимости</h3>
              <p className="text-gray-600 text-sm mb-3">Рассчитайте стоимость сертификации онлайн</p>
              <span className="text-sm font-medium" style={{ color: '#E84E53' }}>Рассчитать →</span>
            </a>

            {/* Service 5 */}
            <a href="/nuzhno-li-sgr" className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#3A5AC9] hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: '#3A5AC9' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3A5AC9]">Нужно ли СГР?</h3>
              <p className="text-gray-600 text-sm mb-3">Проверьте нужна ли гос. регистрация продукции</p>
              <span className="text-sm font-medium" style={{ color: '#3A5AC9' }}>Проверить →</span>
            </a>

            {/* Service 6 */}
            <a href="/proverka-sertifikata" className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#E84E53] hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: '#E84E53' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E84E53]">Проверка сертификата</h3>
              <p className="text-gray-600 text-sm mb-3">Проверьте подлинность сертификата в реестре</p>
              <span className="text-sm font-medium" style={{ color: '#E84E53' }}>Проверить →</span>
            </a>

            {/* Service 7 */}
            <a href="/podbor-tr-ts" className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#3A5AC9] hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: '#3A5AC9' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3A5AC9]">Подбор ТР ТС</h3>
              <p className="text-gray-600 text-sm mb-3">Найдите применимые техрегламенты для товара</p>
              <span className="text-sm font-medium" style={{ color: '#3A5AC9' }}>Подобрать →</span>
            </a>

            {/* Service 8 - All Services */}
            <a href="/servisy" className="group bg-gradient-to-br from-gray-100 to-gray-50 p-6 rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all flex flex-col justify-center items-center text-center">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gray-300">
                <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">Все сервисы</h3>
              <p className="text-gray-500 text-sm">20+ инструментов</p>
            </a>
          </div>
        </div>
      </section>

      {/* Catalogs & Databases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Каталоги и базы данных
            </h2>
            <p className="text-xl text-gray-600">
              Актуальная информация из официальных источников
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Catalog 1 */}
            <a href="/tr-ts" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#E84E53' }}>50+</div>
              <h3 className="text-2xl font-bold mb-3">Технических регламентов</h3>
              <p className="text-gray-400 mb-4">Полный каталог ТР ТС и ТР ЕАЭС с описанием требований и схем сертификации</p>
              <span className="inline-flex items-center text-sm font-medium group-hover:gap-2 transition-all" style={{ color: '#E84E53' }}>
                Открыть каталог
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Catalog 2 */}
            <a href="/tn-ved" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#3A5AC9' }}>16 000+</div>
              <h3 className="text-2xl font-bold mb-3">Кодов ТН ВЭД</h3>
              <p className="text-gray-400 mb-4">Справочник кодов товарной номенклатуры с привязкой к регламентам</p>
              <span className="inline-flex items-center text-sm font-medium group-hover:gap-2 transition-all" style={{ color: '#3A5AC9' }}>
                Открыть справочник
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Catalog 3 */}
            <a href="/organy-sertifikacii" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#E84E53' }}>1 400+</div>
              <h3 className="text-2xl font-bold mb-3">Органов сертификации</h3>
              <p className="text-gray-400 mb-4">База аккредитованных органов и лабораторий из реестра Росаккредитации</p>
              <span className="inline-flex items-center text-sm font-medium group-hover:gap-2 transition-all" style={{ color: '#E84E53' }}>
                Найти орган
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* For Business - Personal Cabinets */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Личные кабинеты для бизнеса
            </h2>
            <p className="text-xl text-gray-600">
              Специализированные решения для разных участников рынка
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-100">
                <svg className="w-6 h-6" style={{ color: '#3A5AC9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Для импортёров</h3>
              <p className="text-gray-600 text-sm mb-4">Управление сертификацией импортных товаров</p>
              <span className="text-sm text-gray-400">Скоро</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-red-100">
                <svg className="w-6 h-6" style={{ color: '#E84E53' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Для производителей</h3>
              <p className="text-gray-600 text-sm mb-4">Полный цикл сертификации продукции</p>
              <span className="text-sm text-gray-400">Скоро</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-green-100">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Для органов сертификации</h3>
              <p className="text-gray-600 text-sm mb-4">CRM для работы с заявками</p>
              <span className="text-sm text-gray-400">Скоро</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-purple-100">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Для лабораторий</h3>
              <p className="text-gray-600 text-sm mb-4">Управление испытаниями и протоколами</p>
              <span className="text-sm text-gray-400">Скоро</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Сферы деятельности
            </h2>
            <p className="text-xl text-gray-600">
              Выберите вашу отрасль для персонализированных решений
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Пищевая продукция', icon: '🍎', href: '/sfera/pishchevaya-produkciya' },
              { name: 'Одежда и обувь', icon: '👕', href: '/sfera/odezhda-obuv' },
              { name: 'Детские товары', icon: '🧸', href: '/sfera/detskie-tovary' },
              { name: 'Электроника', icon: '📱', href: '/sfera/elektronika' },
              { name: 'Мед. изделия', icon: '🏥', href: '/sfera/medicinskie-izdeliya' },
              { name: 'Косметика', icon: '💄', href: '/sfera/kosmetika' },
              { name: 'Строительство', icon: '🏗️', href: '/sfera/stroitelnye-materialy' },
              { name: 'Машиностроение', icon: '⚙️', href: '/sfera/mashinostroenie' },
              { name: 'Химия', icon: '🧪', href: '/sfera/himicheskaya-produkciya' },
              { name: 'Мебель', icon: '🪑', href: '/sfera/mebel' },
              { name: 'Транспорт', icon: '🚗', href: '/sfera/transport' },
              { name: 'Все сферы', icon: '📋', href: '/sfery' },
            ].map((industry, i) => (
              <a
                key={i}
                href={industry.href}
                className="flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all text-center group"
              >
                <span className="text-3xl mb-2">{industry.icon}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{industry.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#3A5AC9' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Не нашли нужный сервис?
            </h2>
            <p className="text-xl opacity-90 mb-10">
              Оставьте заявку и мы поможем решить вашу задачу
              в сфере разрешительной документации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/zayavka"
                className="bg-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition shadow-lg"
                style={{ color: '#E84E53' }}
              >
                Оставить заявку
              </a>
              <a
                href="/kontakty"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition"
              >
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-extrabold" style={{ color: '#E84E53' }}>СРДО</span>
                <span className="text-sm leading-tight text-slate-400">
                  Сервис разрешительной<br />документации
                </span>
              </div>
              <p className="text-slate-400 mb-4 max-w-sm">
                Единая платформа сервисов для работы с разрешительной документацией в России
              </p>
              <p className="text-slate-500 text-sm">
                ООО «Бизнес Среда»
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Сервисы</h4>
              <ul className="space-y-3">
                <li><a href="/podbor-tn-ved" className="text-slate-400 hover:text-white transition">Подбор ТН ВЭД</a></li>
                <li><a href="/nuzhna-li-sertifikaciya" className="text-slate-400 hover:text-white transition">Нужна ли сертификация?</a></li>
                <li><a href="/chestniy-znak" className="text-slate-400 hover:text-white transition">Честный знак</a></li>
                <li><a href="/kalkulyator" className="text-slate-400 hover:text-white transition">Калькулятор</a></li>
                <li><a href="/servisy" className="text-slate-400 hover:text-white transition">Все сервисы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Каталоги</h4>
              <ul className="space-y-3">
                <li><a href="/tr-ts" className="text-slate-400 hover:text-white transition">Техрегламенты ТР ТС</a></li>
                <li><a href="/tn-ved" className="text-slate-400 hover:text-white transition">Коды ТН ВЭД</a></li>
                <li><a href="/organy-sertifikacii" className="text-slate-400 hover:text-white transition">Органы сертификации</a></li>
                <li><a href="/laboratorii" className="text-slate-400 hover:text-white transition">Лаборатории</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Контакты</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:info@srdo.ru" className="flex items-center gap-3 text-slate-400 hover:text-white transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@srdo.ru
                  </a>
                </li>
                <li>
                  <a href="https://t.me/srdo" className="flex items-center gap-3 text-slate-400 hover:text-white transition">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.828.94z"/>
                    </svg>
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2025 СРДО. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-slate-500 hover:text-white transition">Политика конфиденциальности</a>
              <a href="/terms" className="text-slate-500 hover:text-white transition">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
