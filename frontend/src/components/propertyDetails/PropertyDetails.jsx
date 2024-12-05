import React from "react";
import PriceList from "../pricedata/Pricelist";

const PropertyDetails = () => {
  const details = [
    { icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAh1BMVEX///8AAAAEBASrq6uPj4/8/Pz4+PixsbG0tLROTk5LS0u3t7f19fVbW1tWVlZeXl4ODg51dXUXFxd9fX3w8PDQ0NDZ2dkhISFMTExAQEAsLCxXV1cgICB2dnaVlZXq6uo5OTlra2sqKiqdnZ3Dw8M8PDzAwMCFhYVlZWWcnJzX19cTExPMzMwEhJHqAAAHfklEQVR4nO3daXuiMBAAYIKCWu8LV9eKqG1t7f//fatbbScHxySTAH2Yj6iRV8iQhKH1vCaaaKKJJppoogmaCAaLOI6ij+Xn6bXf7bRax/ddu/02n0+nyXk8HPWe1uuX/Waz2s4uk4nP2GT7khzjUvc5ejsrdkwr/Kd+aYzwrLnTKbGOSnI80Tqu51jrdziusfslDsacHxNLDjZx3E9sOa49/pc4GHOZhW062NMvcTDm7Bpv2eEsceU6/MnkMtuuDpv9fr1+6o2G43OSTOfzt3Z7935stTrd/uvpc/kRRXG8GIReuNzt4eeTkhz+jtuxQKtVKHGTt2QHSZbZgRZXFA3mhSWHtwRNTkhazA5bDm8A26RpMiusObwAtkrUZnrYc3ihyyNi0cGdWrb7iKlj0EnWq8tltZ52BtKLC9DuhWqP1WHoiM4T8Jsn4mA9Bg3PCPdaDjPHYCqsSfjTkHsDhGxp95wPM0d0YFJsuIMSgVdsXhDNHMuL7Lh2hSV4C4QcqPf+JwyPx0zluPYFcEzglX1Dvv+PMHOEG7Xjusc//eTTBcQwX03THIw9f78JQvbE+/8I07ybsYbqf59cJ7D1hd5wC9PrYOay6vcc6hVstDMfkR1d1OcHE5YRk0cv6YONVlYfTB1eS/i4cKJ17m/rgm1/yBUEDi+Bnz70g6DPXRyn97d1wLYetYLC4b1Ax+K2ZbECmx79AR64EanhFgQObws+fv80/PUfw5Ej2DakE3wFhcODff2+wAInUY8hO4SMyQT376NwcJB7ioKTqAcErqKcqQRfEf6hcHCn1j1FqU4tCKFdoCNycJ199b+zx6rO3gbbphnNoYPK4SWwkVUnHHSg43un38C258wGcUHmEC+IYjyahZA5lYLSUXSIMgcb34gUpA7h3BLju18/24CEPUJHwWE8nLS0CQy3oHXwP7YQP70BHjciCLWj2FQXQmiKBsgdxRYf4PTr3fQLb2HB4XlLpWQGl4PG4IWj+TfacVyPieLs4hfohuAVgpuhlhzXhp/FJdM5v2Q6IoVYc1wjSjIXseE3d5QNIMKm49Z8Z3q/rdANpRfhlMH0rovsMP5piscafO+rWVOlOgghQakOrmDgZNJQyQ4O8mnQTtkOD15olvlvT4vSHR5ctfvQbqV8hwfnv9pVjfmOoHho7sOWAJLliKdbhg1/v8Nz4LBSs4Iuy3FS3sXMjz16X+AX6UGyHFHmwkGmRB6EZAf8pgW1wzOoXcROV+HgGPsj5Dpiph/Ye+UQopEwsvNVlxmEXDeTGfCj1A5usdkyxKxcK+/6ETH9QJ5aRuVa+ddBd53dpFyrwLjEIP0iO6xBuVah8dUpZUUq14G9pumXaxUcJy7mB/RTbP7+HZ1Atcu1zMe78U4Yvky0Lsj30C3XIhm3x0IuMFmy/QDtIKqciOYfwZBrxKQWRq/uDO1InXxwx8Q3OLe0yrUwDlfzEZ1yrWAkfnG6w9l8RKNcC+NwNx/Bl2thHA6HKOhyLZTD4XwEFj4UKddCORzOR1pw+PCX2uFuPsI5CpRrIR3O5iO8I7/KSXbk3eNy09kFR+5QB+9wMx8RHX7ONUjD4WQ+IjryKlG0HA7mI5Ijp4doOvKCa1Vn0Cg5xtm/gR1HwJe9awzjq+FYCKNofJtuHQP4PHQQhINrhGEQ74REcEGuLbp1LJ6/5iP+/2BZga57wzq4whukY1l8WjXDHhC04yi8H3M8EJcRbG0S2hEKO4PpHxlPR4mBfVQC7ZAeRMH08+In1gp5DcE7vL/6joAVjQvy1riGg7sTj7x+BEVHJxdk0YWOg7tdir0OppaH8rFycDx4CHZJoM2KxNB+/7gF/6viJOkVuz9xwFbZaTrE5xlxkjhPsm9hFxV1HdzSF16yWLOU8C+b4Q5fNaLtkHssThKIAxzGEt3CGc/IwS2raki4Jzu+YoQe5z7CxKHIPUjJUbqc4GtmvsLMofhNkZK+tJiy0iqpMnWYS+Qi/YtGJai5w1wip2H8ZJnCYS5RpGFkCzQOc4lpGqZymEsUabhXPA3TOQgkBmmY0kEg0U7DtA4CiWYapnYQSLTSML2DQKKRhm04CCToNGzHQSBBpmFbDgoJJg3bc1BIiqdhyTGkc1BI5DS8Ue6gXQeFRE7DqgeFbTsoJFIaVpT02HdQSMQ0LJeGunBQSIQmpGJdNw4SCZeGxVPLlYNEAtOwcMPKnYNE8pOGhfTr0kEieaRh4dLu1kEiCY69w2HUKvN43IJAogj3DsXfXiGQlOGwISnHQS8py0EtKc9BKynTQSkp10EnKdtBJSnfQSOpgoNCUg2HuaQqDlNJdRxmkio5TCTVcuhLqubQlVTPoSepokNRIJsrkRx/q+DAS6rqwEqq68BJquzASKrtKC6puqOopPqOYpI6OIpI6uHIl9TFkSepjyNbIjlG1XVkSerlSJfUzZEmqZ9DLamjQyWpp0Mhqakj96HK2jhyJDVyZEpq5ciQ1MyRKqmdI0VSQ4dSUkuHQlJThySprUOowDnX1+F5P/9ackvyZ25KjH6yn802Y/SDxk000UQTTTTRRBO3+AesuXm4ksYzNgAAAABJRU5ErkJggg==", title: "Price", value: "₹ 6 Cr* To 8.5 Cr*" },
    { icon: "https://t4.ftcdn.net/jpg/08/35/68/99/360_F_835689955_iB3lp7iVdfFCSM8x4AOOjenAed7EMbsz.jpg", title: "Area", value: "6.45 Acres" },
    { icon: "data:image/png;base64,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", title: "Configuration", value: "3 & 4 BHK Luxury Apartments" },
    { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSX02ttTwCMVXRLvMulNLYwennMfZEjsqu7Q&s", title: "Rera No", value: "Coming Soon" },
  ];
  const cardData = [
    {
      id: 1,
      title: "A New Benchmark in Luxury Living",
      description:
        "Sector 44 of Noida stands out because of its well-planned infrastructure, unmatched safety and excellent connectivity of Godrej Riverine. The region has good access to Delhi, the NCR, and the rest of the city. It has multiple landmarks nearby that include prominent schools, markets, malls, banks and entertainment hubs making it an ideal place for families to settle. The project is near Indira Gandhi Airport, bus stop and metro station making the commutation seamless and hassle-free for the residents.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      buttonLabel: "Book Now"

    },
    {
      id: 2,
      title: "World-Class Amenities",
      description:
        "The unmatched amenities of premium quality residences of Godrej Sector 44 Noida that embrace the lifestyle of the residents. The project includes unrivalled facilities that include swimming pool, clubhouse, multipurpose hall, safe play area for the kids, dedicated parking space, senior citizen deck, uninterrupted water and power supply, power backup, spa, gym, reflexology track, cycling and walker’s path, joggers track, and indoor and outdoor sports area. All these amenities enhance the overall living experience of the residents fostering good health, well-being and fit lifestyle while enabling them to establish social connect with each other in the gated township.",
      image: "https://images.pexels.com/photos/2612114/pexels-photo-2612114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      buttonLabel: "Book Now"
    },
    {
      id: 3,
      title: "Robust Security",
      description:
      "Godrej Properties prioritize on the unmatched security for the residents of Godrej Sector 44 Noida. Godrej project in Sector 44 Noida boasts advanced security measures that include smart locks, surveillance cameras, access control system, video door phone, intercom facility, trained security patrols and personnel, boundary fencing, booming barriers, motion sensor lighting, alarm systems. Biometric access, fire safety system, remote monitoring system, community watch apps, and parcel lockers with safety features. All these round-the-clock safety measures contribute to the overall well-being and safety of the residents. Enabling them to live a fear-free life with their family.",
      image: "https://plus.unsplash.com/premium_photo-1683133361629-fe250f9e1aeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonLabel: "Book Now"
    },
    
    {
      id: 4,
      title: "Lush Greenery",
      description:
      "Godrej properties place emphasis on the greener living and thus Godrej projects in Noida have a majority of place covered with pristine green space. The manicured greenery connects the residents of Godrej Riverine with the serenity of nature’s beauty enabling them to unwind and relax away from the hustle of the city life. The lush greenery soothes one mind and creates a positive, peaceful and calm environment. While also embracing fresh air all around.",
      image: "https://images.unsplash.com/photo-1671767057398-0d5456438d52?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonLabel: "Book Now"
    },
    // {
    //   id: 5,
    //   title: "Stunning Architecture",
    //   description:
    //     "The unmatched amenities of premium quality residences of Godrej Sector 44 Noida that embrace the lifestyle of the residents. The project includes unrivalled facilities that include swimming pool, clubhouse, multipurpose hall, safe play area for the kids, dedicated parking space, senior citizen deck, uninterrupted water and power supply, power backup, spa, gym, reflexology track, cycling and walker’s path, joggers track, and indoor and outdoor sports area. All these amenities enhance the overall living experience of the residents fostering good health, well-being and fit lifestyle while enabling them to establish social connect with each other in the gated township.",
    //   image: "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   buttonLabel: "Book Now"
    // },
    
  ];
  return (
    <div className="bg-white text-gray-800">
      {/* Property Details Section */}
      <div className="flex flex-wrap justify-around items-center py-8 bg-gray-50 px-4 md:px-12">
        {details.map((detail, idx) => (
          <div key={idx} className="flex items-center space-x-2 my-2 w-full md:w-auto">
            <img src={detail.icon} alt={`${detail.title} icon`} className="w-8 h-8 md:w-10 md:h-10" />
            <div>
              <div className="text-gray-600 font-semibold">{detail.title}</div>
              <div className="text-gray-800">{detail.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Descriptive Section */}
      <div className="p-6 md:p-12 lg:p-24">
        <p className="text-lg md:text-base lg:text-base leading-relaxed mb-6">
          Godrej Sector 44 Noida is a newly upcoming luxury residential apartment project spearheaded by the pioneer
          real estate developer Godrej Properties. Godrej Properties has secured the winning bid of INR 506 crore for
          a 6.45-acre group home plot located in Noida's Sector 44. The developer will develop a luxury apartment
          project named Godrej Riverine that spans across the wide expanse of 26,136.55 square meters or 6.45 acres
          of land area.
        </p>
        <p className="text-lg md:text-base lg:text-base leading-relaxed mb-6">
          The project is strategically located at the coveted address of the city- Sector of 44 and enjoys excellent
          connectivity to the rest of the city, Delhi and NCR. The one-of-a-kind Godrej Projects In Sector 44 Noida
          is a testament of the developer to develop luxury living spaces with unmatched modern amenities and
          comforts. The project offers premium 3 BHK and 4 BHK luxury apartments featuring smart home automation and
          luxury features.
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Every Moment Curated For Connoisseur In You At Godrej Sector 44 Noida Luxury Apartments!
        </h1>
        <p>This project is a thoughtfully designed premium apartments located at the prime area of the city. The project embraces unmatched opulence and elite lifestyle for the discerning few who aim to live a sophisticated lifestyle of their dreams.</p>

        {/* POINTS AND SUBPOINTS  */}
        <div className="bg-white py-16">
          <div className="container mx-auto space-y-16">
            {cardData.map((card, index) => (
              <div
                key={card.id}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Image Section */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-600"></div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
                    {card.title}
                  </h2>
                  <hr className="border-orange-600 w-1/4 mb-6 mx-auto md:mx-0" />
                  <p className="text-gray-700 text-lg mb-6">{card.description}</p>
                  <button className="bg-orange-600 text-white py-3 px-6 rounded-lg shadow hover:bg-orange-700 transition duration-300">
                    {card.buttonLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="p-3 space-y-6">
          {data.map((item, index) => (
            <div key={item.id} className="border-b border-gray-300 pb-4">
              <h2 className="text-xl font-bold mb-2">
                {index + 1}. {item.title}
              </h2>
              <p className="text-gray-700">{item.description}</p>
            </div> */}

        <PriceList />
      </div>
    </div>
  );
};

export default PropertyDetails;
