import DozzerNomicsLg from './DozzerNomicsLg'
import DozzerNomicsSm from './DozzerNomicsSm'

function DozzerNomics() {
  const totalSupply = '1.4 B'
  const tokenomicValues = {
    marketing: {
      percentage: '11%',
      label: 'Marketing',
      text: 'Marketing and partnerships to grow the community and increase awareness.',
    },
    airdrop: {
      percentage: '35%',
      label: 'Airdrop',
      text: 'Airdrop to reward early supporters and incentivize new users.',
    },
    'CEX liquidity': {
      percentage: '10%',
      label: 'CEX Liquidity',
      text: 'CEX Liquidity pool to ensure a stable trading environment.',
    },
    'DEX liquidity': {
      percentage: '10%',
      label: 'DEX Liquidity',
      text: 'DEX Liquidity pool to ensure a stable trading environment.',
    },
  }

  return (
    <>
      <div className="hidden lg:block">
        <DozzerNomicsLg tokenomicValues={tokenomicValues} totalSupply={totalSupply} />
      </div>
      <div className="block lg:hidden">
        <DozzerNomicsSm tokenomicValues={tokenomicValues} totalSupply={totalSupply} />
      </div>
    </>
  )
}

export default DozzerNomics
