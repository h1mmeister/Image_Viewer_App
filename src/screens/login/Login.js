import React, { Component } from "react";
import "./Login.css";
import Header from "../../common/header/Header";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormHelperText from "@material-ui/core/FormHelperText";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      usernamePasswordIncorrect: "dispNone",
      usernameRequired: "dispNone",
      passwordRequired: "dispNone",
      username: "",
      password: "",
      loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
    };
  }

  loginClickHandler = () => {
    let usernameInstagram = "himanshu";
    let passwordInstagram = "himanshu";
    let accessToken = "8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784";

    if (
      this.state.username === usernameInstagram &&
      this.state.password === passwordInstagram
    ) {
      window.sessionStorage.setItem("access-token", accessToken);
      this.props.history.push("/home/");
    }

    this.state.username === ""
      ? this.setState({ usernameRequired: "dispBlock" })
      : this.setState({ usernameRequired: "dispNone" });
    this.state.password === ""
      ? this.setState({ passwordRequired: "dispBlock" })
      : this.setState({ passwordRequired: "dispNone" });

    (this.state.username !== "") &
    (this.state.password !== "") &
    (this.state.username !== usernameInstagram ||
      this.state.password !== passwordInstagram)
      ? this.setState({ usernamePasswordIncorrect: "dispBlock" })
      : this.setState({ usernamePasswordIncorrect: "dispNone" });
  };

  inputUsernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  inputPasswordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div>
        <Header heading="Image Viewer" />
        <div className="cardStyle">
          <Card>
            <CardContent>
              <Typography variant="title">LOGIN</Typography>
              <FormControl required>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  type="text"
                  username={this.state.username}
                  onChange={this.inputUsernameChangeHandler}
                />
                <FormHelperText className={this.state.usernameRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <FormControl required>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  password={this.state.password}
                  onChange={this.inputPasswordChangeHandler}
                />
                <FormHelperText className={this.state.passwordRequired}>
                  <span className="red">required</span>
                </FormHelperText>
                <br />
                <FormHelperText
                  className={this.state.usernamePasswordIncorrect}
                >
                  <span className="red">
                    Incorrect username and/or password
                  </span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.loginClickHandler}
              >
                LOGIN
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
