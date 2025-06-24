const ContactPage = () => {
  return (
    <div
      style={{ fontFamily: "Outfit", fontWeight: 300 }}
      className="flex flex-col-reverse lg:flex-row gap-30 lg:pt-40 px-25  py-25 "
    >
      <div
        className="w-full flex
       flex-col gap-20"
      >
        <h1 className="text-6xl text-white leading-20">
          Contact me if you
          <br /> Need anything
        </h1>

        <form
          action=""
          className="flex flex-col gap-5 w-full text-2xl relative"
        >
          <div className="flex flex-col border-t py-4 border-t-gray-600 text-white gap-4">
            <label htmlFor="name">What's Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="outline-none placeholder:text-xl text-xl text-gray-400"
            />
          </div>
          <div className="flex flex-col border-t py-4 border-t-gray-600 text-white gap-4">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              className="outline-none placeholder:text-xl text-xl text-gray-400"
            />
          </div>
          <div className="flex flex-col border-t py-4 border-t-gray-600 text-white gap-4">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone Number (opsional)"
              className="outline-none placeholder:text-xl text-xl text-gray-400"
            />
          </div>
          <div className="flex flex-col border-t py-4 border-t-gray-600 text-white gap-4">
            <textarea
              id="message"
              name="message"
              placeholder="Write Message Here ..."
              className="outline-none placeholder:text-xl text-xl text-gray-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white text-lg w-30 h-30 rounded-full bg-blue-600 self-end before:content-[''] before:w-full before:h-20 before:absolute before:border-b before:border-b-gray-500 before:left-0 before:bottom-0 before:-z-1"
          >
            Send It
          </button>
        </form>
      </div>

      <div className=" w-full lg:w-[50vw] px-5 flex flex-col gap-20">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <img
            src="../assets/profile.png"
            alt=""
            className="w-full  object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 text-lg">
          <div className="text-white">
            <h1 className="text-gray-500">Contact Details</h1>
            <h2>indrahidayatpermana.09@gmail.com</h2>
            <h2>+62 815 7480 8331</h2>
          </div>
          <div className="text-white">
            <h1 className="text-gray-500">Socials</h1>
            <h2>Github</h2>
            <h2>Instagram</h2>
            <h2>LinkdIn</h2>
            <h2>Facebook</h2>
          </div>
          <div className="text-white">
            <h1 className="text-gray-500">Location</h1>
            <h2>
              JL. Raya Bojongsari Rt/03 Rw/04 Gunungtanjung Tasikmalaya Jawa
              Barat Indonesia
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
