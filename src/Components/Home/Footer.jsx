import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='bg-dark-blue py-2.5'>
      <div className="container mx-auto border-t pt-5">
        <div className="flex items-center justify-between">
          <p className='text-lg text-white'>©{year} Kelurahan Bulusan.</p>
          <div className="flex items-center gap-x-8">
            <FaFacebookF size={23} className="text-white" />
            <FaTwitter size={23} className="text-white" />
            <FaInstagram size={25} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer