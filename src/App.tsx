import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [images] = useState([
    "src/assets/ellen-tanner-RifbETTbEh0-unsplash.jpg",
    "src/assets/annie-spratt-rx1iJ59jRyU-unsplash.jpg",
    "src/assets/mai-truong-E-2skRB88KI-unsplash.jpg",
    "src/assets/mike-petrucci-c9FQyqIECds-unsplash.jpg",
    "src/assets/wijdan-mq-H5yiRXDUkto-unsplash.jpg",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${images[index]})`,
      }}
    >
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome Back <br></br> To{" "}
          </h1>
          <h1 className="mb-5 text-5xl font-bold"> Kal Gift Shopping Center</h1>
          <p className="mb-5 text-xl font-semibold">
            "Welcome to the Gift Shop Management App! Keep track of shop
            activities and manage inventory effortlessly.Log in now to
            streamline shop operations and ensure smooth selling processes."
          </p>
          <button
            className="btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => window.my_modal.showModal()}
          >
            Login
          </button>
          <dialog id="my_modal" className="modal shadow-2xl ">
            <form method="dialog" className="modal-box w-11/12 ">
              <div className="card flex-shrink-0 w-full bg-base-100 max-w-lg ">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Username</span>
                    </label>
                    <input
                      type="text"
                      placeholder="username"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </div>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
    // <>
    //   {/* You can open the modal using ID.showModal() method */}
    //   <button className="btn" onClick={() => window.my_modal.showModal()}>
    //     Login
    //   </button>
    //   <dialog id="my_modal" className="modal shadow-2xl ">
    //     <form method="dialog" className="modal-box w-11/12 ">
    //       <div className="card flex-shrink-0 w-full bg-base-100 max-w-lg ">
    //         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
    //           ✕
    //         </button>
    //         <div className="card-body">
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Username</span>
    //             </label>
    //             <input
    //               type="text"
    //               placeholder="username"
    //               className="input input-bordered"
    //             />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Password</span>
    //             </label>
    //             <input
    //               type="text"
    //               placeholder="password"
    //               className="input input-bordered"
    //             />
    //           </div>
    //           <div className="form-control mt-6">
    //             <button className="btn btn-primary">Login</button>
    //           </div>
    //         </div>
    //       </div>
    //     </form>
    //   </dialog>
    // </>
  );
}

export default App;