import {Component} from "react"
import Cookies from "js-cookie"
import jwt from "jsonwebtoken"
import "./index.css"

class Login extends Component {
    state = {userEmail : "", userName : ""}

    onchangeInputField = e => {
        // console.log(e.target.value)
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmitForm = e => {
        e.preventDefault()
        const {userEmail, userName} = this.state 
        const localStorageData = JSON.parse(localStorage.getItem("userDetailsArray"))
        if (localStorageData !== null) {
            for (let eachUserData of localStorageData) {
                const {email, name} = eachUserData
                if (email === userEmail && name === userName) {
                    const payload = {
                        userName: userName,
                      }
                      const jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN");
                    Cookies.set('jwt_token', jwtToken, {expires: 30})
                    const {history} = this.props
                    history.replace('/')
                }
            }
    }
    else if (localStorageData !== null) {
        const newUserDetailsObject = {email: userEmail, name: userName}
        const newArray = [...localStorageData, newUserDetailsObject]
        localStorage.setItem("userDetailsArray", JSON.stringify(newArray))
    }
    else {
        const newUserDetailsArray = [{email: userEmail, name: userName}]
        localStorage.setItem("userDetailsArray", JSON.stringify(newUserDetailsArray))
    }

    }

    render() {
        return(
            <div className="bg-container">
                <form className="login-container" onSubmit={this.onSubmitForm}>
                    <h1 className="sign-in-text">Sign In</h1>
                    <div className="input-container">
                    <label htmlFor="email" className="label">Email address</label>
                    <input name="userEmail" type="email" onChange={this.onchangeInputField} placeholder="Enter email" className="input-element" id="email" />
                    </div>
                    <div className="input-container">
                    <label htmlFor="userName" className="label">Username</label>
                    <input name="userName" type="text" placeholder="Enter username" onChange={this.onchangeInputField} className="input-element" id="userName" />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login