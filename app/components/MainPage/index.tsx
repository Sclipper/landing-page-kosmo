import Image from 'next/image'
import { colorTheme } from '@/app/colors'
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
                Подобрете оперативната си ефективност с FormFly.
              </h1>
              <p className="mt-3 text-lg">
                Нашето разширение за Chrome ви помага да автоматизирате всички досадни
                задачи, като попълва формулярите вместо вас. Така ще спестите часове
                повтаряща се ръчна работа всяка седмица.
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
          <div className="flex flex-col gap-4 items-baseline mb-8 ">
            <div className="text-start rounded-lg">
              <h3 className="text-2xl font-semibold">Спестявате време</h3>
            </div>
            <div className="text-start rounded-lg">
              <h3 className="text-start text-2xl font-semibold">
                Увеличавате на продуктивността.
              </h3>
            </div>
            <div className="text-start rounded-lg">
              <h3 className="text-2xl font-semibold">Избягвате грешки</h3>
            </div>
          </div>
          <div className="mt-1">
            <h2 className="text-xl font-semibold">Как работи?</h2>
            <h2 className="text-xl font-semibold">
              Гледайте демо за това как FormFly може да ви спести часове работа всяка
              седмица.
            </h2>
            <div style={{ height: '30rem' }} className="aspect-w-16 aspect-h-9 mt-4">
              <iframe
                style={{ maxWidth: '810px' }}
                src="https://www.loom.com/embed/1130ca79857f4e6ebe84e9147007c4d8?sid=98574b66-dc68-400f-80ca-f2bd4030439f"
                title="Demo Video"
                allowFullScreen
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="py-6">
            <EarlyAccessButton />
          </div>
        </div>
      </main>
      <Message />
    </div>
  )
}

export default MainPage
