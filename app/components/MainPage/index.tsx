import Image from 'next/image'
import { MdExpandMore } from 'react-icons/md'
import EarlyAccessButton from '../Ui/EarlyAccessButton'
import Message from '../Message'
import SeeMore from './SeeMore'
import GoUp from './GoUp'

function MainPage() {
  return (
    <div>
      <title>Космо лабс</title>

      <main className="px-10 flex flex-col">
        <div
          style={{
            minHeight: 'calc(100vh - 145px)',
          }}
          className="flex justify-between items-center flex-col md:flex-row"
        >
          <div className="flex flex-col gap-5 items-start md:w-4/12">
            <div className="flex flex-col gap-2">
              <h1
                style={{ lineHeight: '3.5rem' }}
                className="text-5xl md:text-start text-center font-bold"
              >
                Подобрете оперативната си ефективност с
              </h1>
              <h1 className="text-6xl md:text-start text-center font-extrabold text-teal-800">
                FormFly.
              </h1>
            </div>
            <p className="mt-3 text-lg md:text-start text-center">
              Нашето разширение за Chrome ви помага да автоматизирате всички досадни
              задачи, като попълва формулярите вместо вас. Така ще спестите часове
              повтаряща се ръчна работа всяка седмица.
            </p>
            <div className="md:self-start self-center">
              <EarlyAccessButton />
            </div>
          </div>

          <div
            // style={{ height: '30rem' }}
            className="aspect-w-16 aspect-h-9 mt-4 md:w-6/12"
          >
            <Image
              style={{ borderRadius: '0.5rem' }}
              src="/gif2.gif"
              alt="gif"
              width="650"
              height="500"
            />
          </div>
        </div>
        <SeeMore />

        {/* Section 2 */}
        <div className="flex flex-col h-screen py-3">
          <div className="flex md:flex-row flex-col  justify-between gap-4 md:items-baseline items-center mb-8 section-2 ">
            <div className="md:text-start text-center rounded-lg flex flex-col items-center gap-3">
              <Image
                src="/time-is-money.png"
                alt="Time is money icon"
                width={75}
                height={20}
                className="rounded-full"
              />
              <h3 className="text-2xl font-semibold">Спестявате време</h3>
            </div>
            <div className="md:text-start text-center rounded-lg flex flex-col items-center gap-3">
              <Image
                src="/efficacy.png"
                alt="Time is money icon"
                width={75}
                height={20}
                className="rounded-full"
              />
              <h3 className="text-2xl font-semibold">Увеличавате на продуктивността.</h3>
            </div>
            <div className="md:text-start text-center rounded-lg flex flex-col items-center gap-3">
              <Image
                src="/user.png"
                alt="Time is money icon"
                width={75}
                height={20}
                className="rounded-full"
              />
              <h3 className="text-2xl font-semibold">Избягвате грешки</h3>
            </div>
          </div>

          <div className="flex flex-col w-full mt-1 h-3/4 gap-3">
            {/* Ensures that the div takes full viewport height */}
            <h2 className="text-2xl text-teal-600 font-semibold">Как работи?</h2>
            <h2 className="text-xl font-semibold">
              Гледайте демо за това как FormFly може да ви спести часове работа всяка
              седмица.
            </h2>
            {/* Flex container for video and button, occupying remaining space */}
            <div className="flex flex-col flex-grow">
              <div className="flex-grow">
                {' '}
                {/* Adjust vh as needed */}
                <iframe
                  src="https://www.loom.com/embed/1130ca79857f4e6ebe84e9147007c4d8?sid=98574b66-dc68-400f-80ca-f2bd4030439f"
                  title="Demo Video"
                  allowFullScreen
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="py-6">
                <EarlyAccessButton />
              </div>
            </div>
          </div>
          <GoUp />
        </div>
      </main>
      <Message />
    </div>
  )
}

export default MainPage
