// import * as Yup from "yup";
// const passwordRegex = new RegExp(
//     "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
// );
// const phoneRegex=/^[0-9]{10}$/;
// export const signupSchema = Yup.object({
//     name: Yup.string().min(3).required("Please enter your name."),
//     email: Yup.string()
//         .email("Please enter valid email.")
//         .required("Please enter your email."),
//     password: Yup.string()
//         .matches(passwordRegex, "Please enter valid password.")
//         .required("Please enter your password."),
//     cpassword: Yup.string()
//         .oneOf([Yup.ref("password")], "Password do NOT match!")
//         .required("Please enter confirm password."),
//     mobile: Yup.string()
//     .matches(phoneRegex,"Please enter a valid mobile number.")
//     .required("Please enter your mobile number."),
//     // mobile: Yup.string()
//         // .matches(phoneRegex,"Please enter a valid mobile number.")
//     //     .required("Please enter your mobile number."),
//     // mobile: Yup.string()
//     //     .matches(/^\+?91[0-9]{10}$/, "Please enter a valid Indian mobile number.")
//     //     .required("Please enter your mobile number."),
// });

// import * as Yup from 'yup';

// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,18})/;

// export const signupSchema = Yup.object({
//   name: Yup.string()
//     .transform(value => value.toLowerCase().substr(0, 30))
//     .required("Please enter your name.")
//     .max(30, "Name must be at most 30 characters"),

//   // Companyname: Yup.string().required('Company name is required').max(100, 'Company name must be at most 100 characters'),
//   Company: Yup.string()
//   .required('Company name is required')
//   .max(100, 'Company name must be at most 100 characters'),

//   email: Yup.string()
//     .email("Please enter a valid email.")
//     .transform(value => value.toLowerCase())
//     .required("Please enter your email."),

//   password: Yup.string()
//     .matches(passwordRegex, "Password must be 8 to 18 characters")
//     .required("Please enter your password.")
//     .max(18, "Password must be at most 18 characters"),


// });


import * as Yup from "yup";
const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
// const phoneRegex=/^[0-9]{10}$/;
export const signupSchema = Yup.object({
    name: Yup.string().min(3).required("Please enter your name."),
    company: Yup.string()
        .required("Company name is required")
        .min(3, "Company name must be at least 3 characters"),
    email: Yup.string()
        .email("Please enter valid email.")
        .required("Please enter your email."),
    password: Yup.string()
        .matches(passwordRegex, "Please enter valid password.")
        .required("Please enter your password."),
        
    // cpassword: Yup.string()
    //     .oneOf([Yup.ref("password")], "Password do NOT match!")
    //     .required("Please enter confirm password."),
    // mobile: Yup.string()
    // .matches(phoneRegex,"Please enter a valid mobile number.")
    // .required("Please enter your mobile number."),
});



// // Signup.js
// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import './Sign.css'
// const Signup = () => {
//     const formik = useFormik({
//         initialValues: {
//             fullname: "",
//             password: "",
//             companyName: "",
//             email: "",
//         },
//         validationSchema: Yup.object({
//                         fullname: Yup.string()
//                             .required("Full name is required")
//                             .max(30, "exceed characters")
//                             .matches(/^[A-Z][a-zA-Z\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]*$/, "First letter must be uppercase,only letters,spaces, and special characters are allowed"),
//                         password: Yup.string()
//                             .required("Password is required")
//                             .min(12, "Password must be at least 12 characters")
//                             .max(18, "Password cannot exceed 18 characters")
//                             .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/, "Password must include at least one uppercase letter, lowercase letter, one number, and one special character"),
//                         companyName: Yup.string()
//                             .required("Company name is required")
//                             .matches(/^[a-zA-Z\s]+$/, "Company name must be lower case and uppercase"),
//                         email: Yup.string()
//                             .required("Email is required")
//                             .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, "Email address should only be lowercase"),
//                     }),
//         onSubmit: async (values, actions) => {
//             console.log(values);

//             try {
//                 const response = await fetch("http://localhost:5000/send-email", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(values),
//                 });

//                 if (response.ok) {
//                     console.log("Email sent successfully");
//                 } else {
//                     console.error("Failed to send email");
//                 }
//             } catch (error) {
//                 console.error("Error sending email:", error);
//             }

//             actions.resetForm();
//         },
//     });

//     return (
//         <div className="form">
//             <form onSubmit={formik.handleSubmit}>
//                 <div className="Form_container">
//                     <h2 align="center">SIGN UP</h2>
//                     <div>
//                          <label htmlFor="fullName">Name</label>
//                         <input
//                             type="text"
//                             id="fullName"
//                             placeholder="First name and last name"
//                             {...formik.getFieldProps("fullname")}
//                         />
//                         {formik.touched.fullname && formik.errors.fullname && (
//                             <p className="form_error">{formik.errors.fullname}</p>
//                         )}
//                     </div>

//                     <div>
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             placeholder="At least 12 characters"
//                             {...formik.getFieldProps("password")}
//                         />
//                         {formik.touched.password && formik.errors.password && (
//                             <p className="form_error">{formik.errors.password}</p>
//                         )}
//                     </div>

//                     <div>
//                         <label htmlFor="companyName">Company Name</label>
//                         <input
//                             type="companyName"
//                             id="companyName"
//                             placeholder="your company name"
//                             {...formik.getFieldProps("companyName")}
//                         />
//                         {formik.touched.companyName && formik.errors.companyName && (
//                             <p className="form_error">{formik.errors.companyName}</p>
//                         )}
//                     </div>

//                     <div>
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             placeholder="youremail@company.com"
//                             {...formik.getFieldProps("email")}
//                         />
//                         {formik.touched.email && formik.errors.email && (
//                             <p className="form_error">{formik.errors.email}</p>
//                         )}
//                     </div>

                 
//                     <button type="submit">Sign up</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Signup;
