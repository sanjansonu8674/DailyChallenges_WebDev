import React, { useState } from "react";

const Reg_Form = () => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        mobile: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Capitalize the first letter for the name input
        if (name === "fname" || name === "lname") {
            const formattedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
            setFormData({ ...formData, [name]: formattedValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleMobileChange = (e) => {
        const { value } = e.target;
        if (/^\d{0,10}$/.test(value)) {
            setFormData({ ...formData, mobile: value });
        }
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, email: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { mobile, email } = formData;

        if (mobile.length !== 10) {
            alert("Mobile number must be exactly 10 digits.");
        } else if (!email.endsWith("@gmail.com")) {
            alert("Email must end with @gmail.com.");
        } else {
            console.log("Form submitted successfully:", formData);
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className="bg-blue-400 flex justify-center items-center min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-center text-xl font-bold mb-4">Registration Form</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fname">First Name:</label>
                        <input
                            className="p-1 rounded-sm m-4 h-[5vh] w-50"
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder="First Name"
                            value={formData.fname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="lname">Last Name:</label>
                        <input
                            className="p-1 rounded-sm mb-4"
                            type="text"
                            id="lname"
                            name="lname"
                            placeholder="Last Name"
                            value={formData.lname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile:</label>
                        <input
                            className="p-1 rounded-sm mb-4"
                            type="text"
                            id="mobile"
                            name="mobile"
                            placeholder="Mobile"
                            value={formData.mobile}
                            onChange={handleMobileChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            className="p-1 rounded-sm mb-4"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleEmailChange}
                            onBlur={(e) => {
                                if (!e.target.value.endsWith("@gmail.com")) {
                                    alert("Email must end with @gmail.com.");
                                }
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            className="p-1 rounded-sm mb-4"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="file">Upload Your Image:</label>
                        <input
                            className="p-1 rounded-sm mb-4"
                            type="file"
                            id="file"
                            name="file"
                            accept="image/*"
                        />
                    </div>
                    <button className="bg-green-700 p-2 border-black text-white rounded" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Reg_Form;
