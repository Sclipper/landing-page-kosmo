import Image from 'next/image'
import EarlyAccessButton from '../Ui/EarlyAccessButton'
import Message from '../Message'

function MainPage() {
  return (
    <div>
      <title>Космо лабс</title>

      <main className="p-8 py-1">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between flex-col md:flex-row">
            <div className="flex flex-col justify-evenly items-start md:w-2/5 gap-2 md:gap-0">
              <h1 className="text-3xl font-bold ">
                Спестете до 30 минути всеки път в който попълвате този документ.
              </h1>
              <p className="mt-3 text-lg">
                Нашето разширение за Chrome ви позволява да попълвате формуляри бързо и
                лесно. Спестете време и увеличите вашата продуктивност с нашите интуитивни
                функции.
              </p>
              <EarlyAccessButton />
            </div>
            <Image
              src="/main_page_image.png"
              alt="Image of a person with laptop"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-1">
            <h2 className="text-xl font-semibold">Гледайте нашето демо видео по-долу</h2>
            <div style={{ height: '30rem' }} className="aspect-w-16 aspect-h-9 mt-4">
              <iframe
                style={{ maxWidth: '810px' }}
                src="https://www.loom.com/embed/b8e7892625184c778565c41afb6e1281?sid=613cc244-e589-4fec-845e-c4404a497286"
                title="Demo Video"
                allowFullScreen
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </main>
      <Message />
    </div>
  )
}

export default MainPage
