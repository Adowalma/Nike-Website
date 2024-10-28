import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" height={687} width={773} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
                    <span className="text-coral-red inline-block mt-3">
                        Special
                    </span> Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, ipsum. Vel, nostrum minus cum aut vitae labore tenetur explicabo aliquam mollitia, earum accusantium sint odio. Quos cum sit temporibus soluta.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui optio accusantium, nihil quos quis quasi dolorem repellendus vero doloremque! Officiis beatae eius provident corporis. Rerum voluptatum reprehenderit expedita vero.
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="View details" iconURL={arrowRight} />
                    <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
                </div>
            </div>
    </section>
  )
}

export default SpecialOffer