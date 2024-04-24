const MyFooter = () => {
  return (
    <footer className="container-fluid bg-dark p-4">
      <div className="row">
        <div className=" mt-4 col-12 col-md-4">
          <form className="form-group">
            <label className="label" htmlFor="exampleInputEmail1">
              Email
            </label>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Inserisci email"
            />
            <div className="form-group">
              <label className="label" htmlFor="exampleInputPassword1">
                Password
              </label>
              <input
                type="password"
                className="form-control "
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input mt-3"
                id="exampleCheck1"
              />
              <label className="form-check-label mt-1" htmlFor="exampleCheck1">
                Approva
              </label>
            </div>
            <button type="submit" className="btn button ">
              Submit
            </button>
          </form>
        </div>
        <div className="col-12 mt-5 mt-md-0 col-md-8">
          <h2 className="text-center mb-3">EpicLibrary Info</h2>
          <div className="row ms-3">
            <div className="col-12 col-md-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              iste sunt animi modi voluptas ea voluptates natus rem! Quae quasi
              cum quos nostrum et facere atque labore architecto ullam! Sequi.
            </div>
            <div className="col-12 col-md-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              iste sunt animi modi voluptas ea voluptates natus rem! Quae quasi
              cum quos nostrum et facere atque labore architecto ullam! Sequi.
            </div>
          </div>
        </div>
      </div>
      <p className="mt-5 text-center text-md-start  fs-5">
        {" "}
        ©Copyright 2024 HTML.React
      </p>
    </footer>
  );
};

export default MyFooter