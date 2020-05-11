import React from "react";
import "../../styles/singIn.scss";

type Props = {
    email: string;
    password: string;
    onEmailChange: React.FormEventHandler<HTMLInputElement>;
    onPasswordChange: React.FormEventHandler<HTMLInputElement>;
    onSubmit(event: React.SyntheticEvent): void;
    isLoading: boolean | null;
};

const SingUpComponent = (props: Props) => {
    return (
        <div className="sing-in-container">
            <p>Sing In</p>
            <form onSubmit={props.onSubmit}>
                <div>
                    <input type="email" value={props.email} onChange={props.onEmailChange} />
                    <label htmlFor="email">Email</label>
                </div>
                <div>
                    <input type="password" value={props.password} onChange={props.onPasswordChange} />
                    <label htmlFor="password">Password</label>
                </div>
                <div>
                    <button type="submit" disabled={Boolean(props.isLoading)}>
                        Submit
                    </button>
                    {props.isLoading && "Loading ..."}
                </div>
            </form>
        </div>
    );
};

export default SingUpComponent;
