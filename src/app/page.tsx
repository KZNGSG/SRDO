export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">С</span>
            </div>
            <span className="text-xl font-bold text-gray-900">СРДО</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/uslugi" className="text-gray-600 hover:text-blue-600 font-medium transition">Услуги</a>
            <a href="/tr-ts" className="text-gray-600 hover:text-blue-600 font-medium transition">ТР ТС</a>
            <a href="/tn-ved" className="text-gray-600 hover:text-blue-600 font-medium transition">ТН ВЭД</a>
            <a href="/organy" className="text-gray-600 hover:text-blue-600 font-medium transition">Органы</a>
            <a href="/kontakty" className="text-gray-600 hover:text-blue-600 font-medium transition">Контакты</a>
          </nav>
          <a href="tel:88000000000" className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Позвонить
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-blue-100">Работаем по всей России</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Сертификация продукции
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                быстро и надёжно
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Оформляем сертификаты и декларации ТР ТС, СГР, отказные письма.
              Более 10 лет на рынке. 15 000+ довольных клиентов.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/zayavka"
                className="group bg-white text-blue-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2"
              >
                Получить консультацию
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/kalkulyator"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Рассчитать стоимость
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-blue-200">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15 000+</div>
                <div className="text-sm text-blue-200">клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-blue-200">регламентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Всё для сертификации в одном месте
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Уникальные инструменты и базы данных для работы с разрешительной документацией
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">50+ Технических Регламентов</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Полный каталог ТР ТС и ТР ЕАЭС с подробным описанием требований, схем сертификации и перечнем продукции
              </p>
              <a href="/tr-ts" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-2 transition-all">
                Перейти в каталог
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1 400+ Органов сертификации</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Актуальная база аккредитованных органов и лабораторий из реестра Росаккредитации с контактами
              </p>
              <a href="/organy" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group-hover:gap-2 transition-all">
                Найти орган
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">16 000+ кодов ТН ВЭД</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Умный помощник подбора кода ТН ВЭД для таможенного оформления с привязкой к техническим регламентам
              </p>
              <a href="/tn-ved" className="inline-flex items-center text-violet-600 font-semibold hover:text-violet-700 group-hover:gap-2 transition-all">
                Подобрать код
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр услуг по сертификации и декларированию
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Сертификат ТР ТС', desc: 'Обязательная сертификация по техническим регламентам', icon: '📜', color: 'blue' },
              { title: 'Декларация ТР ТС', desc: 'Декларирование соответствия требованиям ТР ТС', icon: '📋', color: 'emerald' },
              { title: 'СГР', desc: 'Свидетельство о государственной регистрации', icon: '🏛️', color: 'violet' },
              { title: 'Отказное письмо', desc: 'Письмо о непопадании под сертификацию', icon: '✉️', color: 'amber' },
            ].map((service, i) => (
              <a
                key={i}
                href={`/${service.title.toLowerCase().replace(/ /g, '-')}`}
                className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Нужна консультация специалиста?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Оставьте заявку и получите бесплатный расчёт стоимости
              сертификации вашей продукции за 30 минут
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/zayavka"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition shadow-lg"
              >
                Оставить заявку
              </a>
              <a
                href="tel:88000000000"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                8 (800) 000-00-00
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">С</span>
                </div>
                <span className="text-xl font-bold">СРДО</span>
              </div>
              <p className="text-slate-400 mb-4">
                Сервис Разрешительной<br />Документации Онлайн
              </p>
              <p className="text-slate-500 text-sm">
                ООО «Бизнес Среда»<br />
                ИНН: 0000000000
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Услуги</h4>
              <ul className="space-y-3">
                <li><a href="/sertifikat-tr-ts" className="text-slate-400 hover:text-white transition">Сертификаты ТР ТС</a></li>
                <li><a href="/deklaraciya-tr-ts" className="text-slate-400 hover:text-white transition">Декларации ТР ТС</a></li>
                <li><a href="/sgr" className="text-slate-400 hover:text-white transition">СГР</a></li>
                <li><a href="/otkaznoe-pismo" className="text-slate-400 hover:text-white transition">Отказные письма</a></li>
                <li><a href="/protokoly-ispytaniy" className="text-slate-400 hover:text-white transition">Протоколы испытаний</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Каталоги</h4>
              <ul className="space-y-3">
                <li><a href="/tr-ts" className="text-slate-400 hover:text-white transition">Техрегламенты ТР ТС</a></li>
                <li><a href="/tn-ved" className="text-slate-400 hover:text-white transition">Коды ТН ВЭД</a></li>
                <li><a href="/organy-sertifikacii" className="text-slate-400 hover:text-white transition">Органы сертификации</a></li>
                <li><a href="/laboratorii" className="text-slate-400 hover:text-white transition">Испытательные лаборатории</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Контакты</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:88000000000" className="flex items-center gap-3 text-slate-400 hover:text-white transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    8 (800) 000-00-00
                  </a>
                </li>
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
