const ContactUs = () => {
    return (
        <div className="bg-gray-100 mt-8 rounded-lg w-87.5 border-transparent mx-auto min-h-75">
            <h1 className="flex justify-center items-center font-semibold text-3xl p-4 m-4">
                Get in touch
            </h1>
            <form className="flex-col -mt-3 items-center justify-center flex">
                 <input type="text" 
                className="rounded-md w-1/2 border border-black text-sm p-0.5" 
                placeholder="Name"
                />
                 <input type="text"
                 className="rounded-md text-sm mt-2 w-1/2 border border-black -2 p-0.5"
                 placeholder="Email"
                 />
                 <input type="text"
                 className="rounded-md text-sm mt-2 w-1/2 border border-black -2 p-0.5"
                 placeholder="Phone"
                 />
                 <input type="text"
                 className="rounded-md mt-2 w-1/2 border border-black text-sm p-0.5" 
                 placeholder="Message" 
                 />
                <button className="mt-5 border-orange-500 p-1 w-3/8 bg-orange-500 rounded-lg text-white font-bold">
                Submit
                </button>
                <p className="text-center text-[11px] mt-2 font-semibold">
                By contacting us you agree to the
                Terms and Conditions
                <br/>
                and Privacy Policy
                </p>
            </form>
        </div>
    )
}

export default ContactUs;