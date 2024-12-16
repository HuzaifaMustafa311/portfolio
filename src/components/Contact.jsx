import React from "react";
import Swal from 'sweetalert2'

function Contact() {

  const onSubmit1 = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f7944d5b-1ba1-4182-b1a1-561c20be1ae2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      Swal.fire({
        title: "Good job!",
        text: "Message sent successfully!",
        timer: 1500,
        icon: "success"
      });
      event.target.reset();
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-[#0f1632] py-12" id="Contact">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-x-10">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="md:text-3xl text-2xl font-bold text-[#3b82f6] dark:text-white mb-8">
              Feel Free to Contact Me
            </h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-white rounded-full border-4 border-[#5b94f1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#1f5495"
                    class="w-6 h-6"
                  >
                    <path
                      d="M17.707 13.293a1 1 0 0 0-1.414 0l-2.293 2.293a11.036 11.036 0 0 1-5.586-5.586l2.293-2.293a1 1 0 0 0 0-1.414L7.586 2.293a1 1 0 0 0-1.414 0l-2.879 2.879a3 3 0 0 0-.879 2.121c0 6.627 5.373 12 12 12 .796 0 1.561-.281 2.121-.879l2.879-2.879a1 1 0 0 0 0-1.414l-3.586-3.586z"
                    />
                  </svg>

                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 dark:text-gray-200">Phone</p>
                  <p className="text-lg font-medium text-[#2a5196] dark:text-[#3b81f5]">
                    +92 (306) 5312422
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-white rounded-full border-4 border-[#5b94f1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#1f5495"
                    class="w-6 h-6"
                  >
                    <path
                      d="M20 4H4C2.895 4 2 4.895 2 6v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zM4 18v-9.489l7.555 5.037c.286.191.603.289.922.289s.636-.098.922-.289L20 8.511V18H4z"
                    />
                  </svg>

                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 dark:text-gray-200">Email</p>
                  <p className="text-lg font-medium text-[#2a5196] dark:text-[#3b81f5]">
                    huzaifamustafa76@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-white rounded-full border-4 border-[#5b94f1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#1f5495"
                    class="w-6 h-6"
                  >
                    <path
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 6.48 11.04 6.75 11.29.13.13.31.21.5.21s.37-.08.5-.21C12.52 20.04 19 14.25 19 9c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
                    />
                  </svg>

                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 dark:text-gray-200">Address</p>
                  <p className="text-lg font-medium text-[#2a5196] dark:text-[#3b81f5]">Islamabad,
                    Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-white dark:bg-[#284f92] md:p-8 p-4 shadow-lg rounded-lg">
            <form onSubmit={onSubmit1}>
              <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#0f1632] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#0f1632] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#0f1632] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-5">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#0f1632] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#1e3c73] dark:hover:bg-blue-600 dark:bg-[#3778e4] hover:bg-[#284f93] text-white text-sm w-[100%] lg:text-base font-medium py-2 px-6 rounded-full shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
