import FooterLg from './FooterLg'
import FooterSm from './FooterSm'

function Footer() {
  return (
    <div>
      <div className="hidden lg:block">
        <FooterLg />
      </div>
      <div className="block lg:hidden">
        <FooterSm />
      </div>
    </div>
  )
}

export default Footer
