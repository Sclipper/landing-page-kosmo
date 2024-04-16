import Image from 'next/image'

function Message() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-3/5 space-y-4 text-left md:text-left self-end">
        <h1 className="text-header font-bold">
          One <span className="text-dozzer-orange">(Bull) DOZZER</span> token
        </h1>
        <h2 className="text-subheader font-bold ">Crushing the competition in crypto</h2>
        <p className="text-bodytext md:w-2/3 w-full">
          Bulldozer (DOZER) is not just a cryptocurrency; it&apos;s a symbol of strength
          and innovation. Inspired by the durability of the iconic construction machine,
          it aims to clear a path through the cryptocurrency landscape, ushering in new
          opportunities.
        </p>
      </div>
      <div
        // style={{ maxWidth: '600px' }}
        className="md:w-3/6 lg:w-full sm:mb-4 md:mb-0 self-end md:self-auto sm:self-center"
      >
        <Image
          src="/dozzer_messenger.svg"
          alt="bulldozer"
          width={400000}
          height={40000}
        />
      </div>
    </div>
  )
}

export default Message
