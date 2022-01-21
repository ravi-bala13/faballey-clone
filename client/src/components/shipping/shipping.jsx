import { useState } from "react";

export const Shipping = () => {
  const [form, setForm] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <div className="border-2 border-black mt-5 mx-auto w-9/12 p-2">
      <div className="w-7/12 border border-slate-800">
        <p className="text-slate-700 text-xl">
          Where do you want us to deliver?
        </p>
        <div>
          <div className="border border-gray-900 p-4">
            <div className="flex">
              <div className="flex-1 mr-2 border border-red-600">
                <label className="font-semibold">Full name*</label>
                <br />
                <input
                  type="text"
                  placeholder="enter name"
                  className="border border-gray-500 rounded-sm w-full p-2"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1 border border-red-600">
                <label className="font-semibold">Mobile Number*</label>
                <br />
                <input
                  type="text"
                  className="border border-gray-500 rounded-sm w-full p-2"
                  name="number"
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* second div */}
            <div className="flex">
              <div className="flex-1 mr-2 border border-red-600">
                <label className="font-semibold">country*</label>
                <br />
                <select
                  className="border border-gray-500 w-full p-2"
                  name="country"
                  onChange={handleChange}
                >
                  <option value=""> Select Country </option>
                  <option value="7">Australia</option>
                  <option value="13">Belgium</option>
                  <option value="3">Canada</option>
                  <option value="22">China</option>
                  <option value="92">Fiji</option>
                  <option value="34">France</option>
                  <option value="36">Germany</option>
                  <option value="38">Greece</option>
                  <option value="93">Guyana</option>
                  <option value="40">Hong Kong</option>
                  <option value="41">Hungary</option>
                  <option value="1">India</option>
                  <option value="42">Indonesia</option>
                  <option value="43">Ireland</option>
                  <option value="45">Italy</option>
                  <option value="47">Japan</option>
                  <option value="51">Kuwait</option>
                  <option value="52">Malaysia</option>
                  <option value="87">Mauritius</option>
                  <option value="90">Nepal</option>
                  <option value="54">Netherlands</option>
                  <option value="55">New Zealand</option>
                  <option value="89">Nigeria</option>
                  <option value="60">Philippines</option>
                  <option value="67">Saudi Arabia</option>
                  <option value="88">Scotland</option>
                  <option value="68">Singapore</option>
                  <option value="71">South Africa</option>
                  <option value="72">Spain</option>
                  <option value="91">Sri Lanka</option>
                  <option value="73">Sweden</option>
                  <option value="74">Switzerland</option>
                  <option value="76">Thailand</option>
                  <option value="94">Trinidad and Tobago</option>
                  <option value="79">United Arab Emirates</option>
                  <option value="80">United Kingdom</option>
                  <option value="2">United States</option>
                </select>
              </div>
              <div className="flex-1 border border-red-600">
                <label className="font-semibold">Pincode*</label>
                <br />
                <input
                  type="text"
                  className="border border-gray-500 rounded-sm w-full p-2"
                  name="pincode"
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* third div */}
            <div>
              <label className="font-semibold">Address*</label>
              <input
                type="text"
                className="border border-gray-500 rounded-sm w-full h-24"
                name="address"
                onChange={handleChange}
              />
            </div>
            {/* fourth div */}
            <div className="my-3">
              <input type="checkbox"></input>
              <label className="text-slate-500 ml-2">
                Make this my default address
              </label>
            </div>
            {/* submit input */}
            <div className="my-4">
              <input
                type="submit"
                className="w-1/2 h-12 rounded-sm text-white bg-rose-400 hover:bg-rose-600"
                value="Deliver to this address"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
