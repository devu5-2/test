import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-start md:justify-between px-12 space-y-6 md:space-y-0">
                {/* Location Section */}
                <div className="md:w-1/2 p-2">
                    <h2 className="text-2xl font-bold mb-4">Location</h2>
                    <p className="text-gray-400 mb-2">
                    Marketed By - This site is for information purpose only and should not be treated as the official information.<strong> RERA No. - UPRERAAGT24448 </strong>and <strong>Project Rera Reg No. UPRERAPRJ763929/11/2024 </strong>All rights for logo & images are reserved to the developer. Thank you for visiting our website. This disclaimer ("Disclaimer") is applicable to this website and all microsites and websites owned by us. By using or accessing this website you agree with the Disclaimer without any qualification or limitation. A residential property of the highest standards being developed in sector 44  Noida.                    </p>
                    {/* <p className="text-gray-400">
                        <strong>Godrej Sector 44 Noida</strong> is a great option for families because it is close to schools, hospitals, retail areas, and entertainment venues.
                    </p> */}
                </div>

                {/* Map Section */}
                <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-md">

                    <iframe
                        alt="Map showing Sector 44 in Noida with nearby landmarks"
                        className="absolute inset-0 w-full h-full border-none"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.253518703825!2d77.32614070241377!3d28.552840661329917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5cd16160437%3A0x790b1479ec8c8b1c!2sSector%2044%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1721992678802!5m2!1sen!2sin"
                        title="myFrame"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-6"></div>

            {/* Add privacy policy, disclaimer and Copyright */}
            <div className="container mx-auto text-center">
                 
                <p className="text-gray-500">© 2024 All Rights Reserved. </p>
            </div>
        </footer>
    );
};

export default Footer;
