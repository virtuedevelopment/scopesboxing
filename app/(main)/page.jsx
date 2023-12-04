//Landing page
import Link from "next/link"
import Image from "next/image"

export default function Landing() {
  return (
    <main className="landing" >
      <Image className="landingImage" src={'/landing.png'} width={500} height={500} alt="background"/>
        <div className="enterBox">
          <Image src={'/logoRB.svg'} width={300} height={270} alt="logo" />
          <Link href={'/home'} className="button-01">Enter</Link>
        </div>
    </main>
  )
}
