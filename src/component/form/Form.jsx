

const Form = () => {
  return (
    <div className="flex justify-center items-center">
         <form className="bg-black bg-opacity-40 p-7 px-9 lg:m-7 m-3 rounded-xl">
            <h1 className="text-3xl text-white font-semibold">Customer Information:</h1>
            <div className="line bg-gray-400 h-[1px] my-10"></div>

            <div className="name">
              <h2 className="my-5">Customer Name</h2>
              <div className="input flex gap-7">
                <input className="px-3 py-2 rounded-lg w-1/2" type="text" />
                <input className="px-3 py-2 rounded-lg w-1/2" type="text" />
              </div>

              <div className="flex gap-4 my-1">
                <label className="w-1/2">First Name</label>
                <label>Last Name</label>
              </div>
            </div>

            
          <div className="address my-5">
            <h2>Address</h2>
            <input className="px-3 py-2 rounded w-[100%]" type="text" />
            <label>Street Address</label>

            <input className="mt-7 px-3 py-2 rounded w-[100%]" type="text" />
            <label>Street Address Line 2</label>

            <div className="input flex gap-7 mt-7">
              <input className="px-3 py-2 rounded-lg w-1/2" type="text" />
              <input className="px-3 py-2 rounded-lg w-1/2" type="text" />
            </div>

            <div className="flex gap-4 my-1">
              <label className="w-1/2">City</label>
              <label>State/Province</label>
            </div>

            <div className="input flex gap-7 mt-7">
              <input className="px-3 py-2 rounded-lg w-1/2" type="text" />
              <input className="px-3 py-2 rounded-lg w-1/2" type="text" />
            </div>

            <div className="flex gap-4 my-1">
              <label className="w-1/2">Portal / Zip Code</label>
              <label>Country</label>
            </div>

            <div className="contacy">
              <h2>Contact Information</h2>
              <input className="px-3 py-2 rounded-lg w-1/2" type="text" placeholder="(000) 000 0000" />
            </div>

            <div className="email flex flex-col gap-1">
              <h2>Email</h2>
              <input className="px-3 py-2 rounded-lg w-1/2" type="text" placeholder="mubarakcox8gmail.com" />
              <label>mubarakcox8gmail.com</label>
            </div>

            <div className="line bg-gray-400 h-[1px] my-10"></div>
          </div>

          <div className="textarea flex flex-col gap-3">
            <label>How long have you been using this product and why?</label>
            <textarea className="rounded-lg p-2 text-sm hover:border-2 border-blue-500" name="textarea" rows="10" cols="30"></textarea>
          </div>

          <div className="textarea flex flex-col gap-3">
            <label>Write your coments and suggestions about our products in comparison with other competitors:</label>
            <textarea className="rounded-lg p-2 text-sm hover:border-2 border-blue-500" name="textarea" rows="10" cols="30"></textarea>
          </div>

          <div className="textarea flex flex-col gap-3">
            <label>Are you satisfide with our product performance? share your opinions:</label>
            <textarea className="rounded-lg p-2 text-sm hover:border-2 border-blue-500" name="textarea" rows="10" cols="30"></textarea>
          </div>

          <div className="textarea flex flex-col gap-3">
            <label>Tell us something experiences to buy our product:</label>
            <textarea className="rounded-lg p-2 text-sm hover:border-2 border-blue-500" name="textarea" rows="10" cols="30"></textarea>
          </div>

          <div className="textarea flex flex-col gap-3">
            <label>Would you like to continue with our product? if No why?</label>
            <textarea className="rounded-lg p-2 text-sm hover:border-2 border-blue-500" name="textarea" rows="10" cols="30"></textarea>
          </div>

          <div className="textarea flex flex-col gap-3">
            <label>What kinde of changes would you like to see in our products so as to enhance your satisfaction level?</label>
            <textarea className="rounded-lg p-2 text-sm hover:border-2 border-blue-500" name="textarea" rows="10" cols="30"></textarea>
          </div>

          <div className="line bg-gray-400 h-[1px] my-10"></div>

          <div className="btn flex flex-col gap-10 justify-center items-center">
            <label>Thank for completing this survey!</label>
            <button className="bg-green-500 p-2 text-sm px-10 text-white rounded-lg hover:bg-green-700">Submit</button>
          </div>
          
         </form>

    </div>
  )
}

export default Form