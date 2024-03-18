import Image from 'next/image'

function Message() {
  return (
    <div className=" p-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="space-y-4 text-center md:text-left md:w-2/3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          One <span className="text-dozzer-orange">(Bull) DOZZER</span> token
        </h1>
        <h2 className="text-xl md:text-3xl font-bold">
          Crushing the competition in crypto
        </h2>
        <p className="text-sm md:text-xs md:w-1/2">
          Bulldozer (DOZER) is not just a cryptocurrency; it's a symbol of strength and
          innovation. Inspired by the durability of the iconic construction machine, it
          aims to clear a path through the cryptocurrency landscape, ushering in new
          opportunities.
        </p>
      </div>
      <div className="sm:mb-4 md:mb-0 self-end md:self-auto">
        <Image src="/dozzer_messenger.svg" alt="bulldozer" width={400} height={400} />
      </div>
    </div>
  )
}

export default Message
