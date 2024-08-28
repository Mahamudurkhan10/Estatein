import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <div className="container bg-[#141414] mx-auto">
      <div className="border border-black mb-5 p-7">
        <footer className="footer hover:shadow-2xl mb-2 text-white grid items-center max-w-[1400px] mx-auto">
          <div>
            <aside className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/qrTfx3H/Symbol.png"
                className="size-9"
                alt="VerdantHaven Logo"
              />
              <p className="uppercase text-xl">Estatein</p>
            </aside>
            <form action="">
              <label className="input input-bordered mt-5 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Your Email"
                />
                <button className="text-2xl font-bold text-blue-500">
                  <IoIosSend />
                </button>
              </label>
            </form>
          </div>

          <div className="grid lg:grid-cols-5 grid-cols-1 w-full p-4 lg:ml-[70px]">
            <div className="flex flex-col text-lg">
              <h6 className="footer-title">Home</h6>
              <a className="link link-hover">Hero Section</a>
              <a className="link link-hover">Features</a>
              <a className="link link-hover">Properties</a>
              <a className="link link-hover">Testimonials</a>
              <a className="link link-hover">FAQ's</a>
            </div>
            <div className="flex flex-col text-lg">
              <h6 className="footer-title">About Us</h6>
              <a className="link link-hover">Our Story</a>
              <a className="link link-hover">Our Works</a>
              <a className="link link-hover">How It Works</a>
              <a className="link link-hover">Our Team</a>
              <a className="link link-hover">Our Clients</a>
            </div>
            <div className="flex flex-col text-lg">
              <h6 className="footer-title">Properties</h6>
              <a className="link link-hover">Portfolio</a>
              <a className="link link-hover">Categories</a>
            </div>
            <div className="flex flex-col text-lg">
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Valuation Mastery</a>
              <a className="link link-hover">Strategic Marketing</a>
              <a className="link link-hover">Negotiation Wizardry</a>
              <a className="link link-hover">Closing Success</a>
              <a className="link link-hover">Property Management</a>
            </div>
            <div className="flex flex-col text-lg">
              <h6 className="footer-title">Contact Us</h6>
              <a className="link link-hover">Contact Form</a>
              <a className="link link-hover">Our Offices</a>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-[#191919]">
        <footer className="footer flex lg:flex-row flex-col justify-between items-center text-lg text-white max-w-[1400px] mx-auto p-4">
          <aside className="flex flex-col lg:flex-row gap-9 items-center">
            <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
            <p>Terms & Conditions</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M22.23 0H1.77C.792 0 0 .77 0 1.722v20.555C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.722V1.722C24 .77 23.208 0 22.23 0zM7.058 20.452H3.738V9.038h3.32v11.414zm-1.66-13.01h-.022C4.692 7.442 3.74 6.468 3.74 5.254c0-1.235.975-2.2 2.624-2.2s2.641.966 2.663 2.2c0 1.214-.953 2.188-2.63 2.188zm14.57 13.01h-3.319v-5.857c0-1.474-.528-2.479-1.85-2.479-.993 0-1.584.667-1.844 1.311-.095.23-.119.55-.119.873v6.152h-3.319s.043-9.981 0-11.014h3.319v1.56c.441-.682 1.228-1.655 2.992-1.655 2.183 0 3.819 1.423 3.819 4.482v6.627z" />
              </svg>
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
