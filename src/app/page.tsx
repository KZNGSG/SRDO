export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            СРДО
            <span className="block text-2xl font-normal text-primary-600 mt-2">
              Сервис Разрешительной Документации Онлайн
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Оформление сертификатов и деклараций ТР ТС, СГР, отказных писем.
            <br />
            Работаем по всей России. Быстро и надёжно.
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="/uslugi"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition"
            >
              Наши услуги
            </a>
            <a
              href="/kalkulyator"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition"
            >
              Рассчитать стоимость
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-3">50+ Технических Регламентов</h3>
            <p className="text-gray-600">
              Полный каталог ТР ТС/ЕАЭС с подробным описанием требований
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold mb-3">1400+ Аккредитованных органов</h3>
            <p className="text-gray-600">
              База подрядчиков из реестра Росаккредитации
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-3">16 000+ кодов ТН ВЭД</h3>
            <p className="text-gray-600">
              Помощник подбора кода для таможенного оформления
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Нужна консультация?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Оставьте заявку и получите расчёт стоимости за 30 минут
          </p>
          <a
            href="/zayavka"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Оставить заявку
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">СРДО</h4>
              <p className="text-gray-400">
                ООО «Бизнес Среда»
                <br />
                Сервис разрешительной документации
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/sertifikat-tr-ts" className="hover:text-white">Сертификаты ТР ТС</a></li>
                <li><a href="/deklaraciya-tr-ts" className="hover:text-white">Декларации ТР ТС</a></li>
                <li><a href="/sgr" className="hover:text-white">СГР</a></li>
                <li><a href="/otkaznoe-pismo" className="hover:text-white">Отказные письма</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Каталоги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/tr-ts" className="hover:text-white">Техрегламенты ТР ТС</a></li>
                <li><a href="/tn-ved" className="hover:text-white">Коды ТН ВЭД</a></li>
                <li><a href="/organy-sertifikacii" className="hover:text-white">Органы сертификации</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <p className="text-gray-400">
                8 (800) 000-00-00
                <br />
                info@srdo.ru
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            © 2025 СРДО. Все права защищены.
          </div>
        </div>
      </footer>
    </main>
  );
}
