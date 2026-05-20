import "../styles/login.css";
import nuimage from "../assets/background/nuimage.png";
import logo from "../assets/icons/Full Logo.png";

function Login() {
    return (
        <div id="LoginGrid">
            <div id="ImageSection">
                <img id="BackgroundImage" src={nuimage} alt="National University Building" />
            </div>
            <div id="LoginSection">
                <div id="InnerBox">
                    <div id="LogoDiv">
                        <img id="Logo" src={logo} alt="NUEATS Logo" />
                    </div>
                    <div id="TextDiv">
                        <div id="TextWrapper">
                            <h1>Welcome Back!</h1>
                            <h3>Please log-in to continue.</h3>
                        </div>
                    </div>
                    <div id="FormDiv">
                        <div id="FormWrapper">
                            <p className="FormLabel">Email</p>
                            <input placeholder="Input your email" type="text" />
                            <p className="FormLabel" >Password</p>
                            <input placeholder="Input your password" type="password"/>
                        </div>
                    </div>
                    <div id="ButtonDiv">
                        <button id="LoginButton">LOG IN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;