type SectionsProps = {
  orientation?: 'col' | 'row'
  items?: 'start' | 'center' | 'end'
}

function Sections({ orientation = 'row', items = 'start' }: SectionsProps) {
  return (
    <div className={`flex flex-${orientation} items-${items} gap-4`}>
      <p className="text-md cursor-pointer">What is DOZZER?</p>
      <p className="text-md cursor-pointer">Hot To Buy?</p>
      <p className="text-md cursor-pointer">Tokenomics</p>
      <p className="text-md cursor-pointer">Roadmap</p>
      <p className="text-md cursor-pointer">Airdrop</p>
    </div>
  )
}

export default Sections
