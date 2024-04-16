'use client'

type SectionsProps = {
  setIsOpen?: (open: boolean) => void
  orientation?: 'col' | 'row'
  items?: 'start' | 'center' | 'end'
}

function Sections({ setIsOpen, orientation = 'row', items = 'start' }: SectionsProps) {
  const scrollToSection = (sectionId: string) => {
    // Prevent the default anchor behavior
    // event.preventDefault()
    setIsOpen?.(false)
    // Find the section element
    const section = document.getElementById(sectionId)

    if (!section) return

    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  // Function to handle key down event on clickable elements
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    sectionId: string
  ) => {
    // Check if the key pressed is 'Enter' or 'Space'
    if (event.key === 'Enter' || event.key === ' ') {
      scrollToSection(sectionId)
    }
  }

  return (
    <div className={`flex flex-${orientation} items-${items} gap-4`}>
      <a
        tabIndex={0}
        onClick={() => scrollToSection('what-is-dozzer')}
        onKeyDown={(event: any) => handleKeyDown(event, 'what-is-dozzer')}
        className="text-md cursor-pointer focus:outline-none"
        role="button"
      >
        What is DOZZER?
      </a>
      <a
        tabIndex={0}
        onClick={() => scrollToSection('how-to-buy')}
        onKeyDown={(event: any) => handleKeyDown(event, 'how-to-buy')}
        className="text-md cursor-pointer focus:outline-none"
        role="button"
      >
        How To Buy?
      </a>
      <a
        tabIndex={0}
        onClick={() => scrollToSection('tokenomics')}
        onKeyDown={(event: any) => handleKeyDown(event, 'tokenomics')}
        className="text-md cursor-pointer focus:outline-none"
        role="button"
      >
        Tokenomics
      </a>
      <a
        tabIndex={0}
        onClick={() => scrollToSection('roadmap')}
        onKeyDown={(event: any) => handleKeyDown(event, 'roadmap')}
        className="text-md cursor-pointer focus:outline-none"
        role="button"
      >
        Roadmap
      </a>
      <a
        tabIndex={0}
        onClick={() => scrollToSection('airdrop')}
        onKeyDown={(event: any) => handleKeyDown(event, 'airdrop')}
        className="text-md cursor-pointer focus:outline-none"
        role="button"
      >
        Airdrop
      </a>
    </div>
  )
}

export default Sections
