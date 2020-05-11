import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingInComponent from "../../components/SingIn/SingInComponent";
import { loginUser } from "../../services";
import { isAuthLoadingSelector } from "../../../../redux/selectors";

const SignUpContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    const isLoading  = useSelector(isAuthLoadingSelector);
    const dispatch = useDispatch();

    const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (errors.email) {
            setErrors({ ...errors, email: "" });
        }
        // validations
        setEmail(e.currentTarget.value);
    };

    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (errors.email) {
            setErrors({ ...errors, email: "" });
        }
        // validations
        setPassword(e.currentTarget.value);
    };

    const isValid = () => {
        return true;
    };

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        // validations
        if (!isValid()) return;
        dispatch(loginUser(email, password));
        console.log(email);
        console.log(password);
    };

    return (
        <>
            <SingInComponent
                email={email}
                onEmailChange={onEmailChange}
                password={password}
                onPasswordChange={onPasswordChange}
                onSubmit={onSubmit}
                isLoading={isLoading}
            />
        </>
    );
};

export default SignUpContainer;
