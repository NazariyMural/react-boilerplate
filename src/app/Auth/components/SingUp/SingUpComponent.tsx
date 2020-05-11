import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/singUp.scss";

type Props = {
    email: string;
};

const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});

const SingUpComponent = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        validationSchema: SignUpSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <div className="sing-up-container">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input name="firstName" {...formik.getFieldProps("firstName")} />
                {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" {...formik.getFieldProps("lastName")} />
                {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                <label htmlFor="email">Email Address</label>
                <input name="email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SingUpComponent;
