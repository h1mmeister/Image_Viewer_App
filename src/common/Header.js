import {
  Avatar,
  Divider,
  IconButton,
  Input,
  InputAdornment,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React, { Component, Fragment } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      openMenu: false,
      anchorEl: null,
      searchText: "",
    };
  }

  logoClickHandler = () => {
    this.props.history.push("/home");
  };

  myAccountClickHandler = () => {
    this.props.history.push("/profile");
  };

  logoutClickHandler = () => {
    sessionStorage.removeItem("access-token");
    this.props.history.push("/");
  };

  profileClickHandler = (e) => {
    this.setState({
      openMenu: !this.state.openMenu,
      anchorEl: e.currentTarget,
    });
  };

  menuCloseHandler = () => {
    this.setState({ openMenu: !this.state.openMenu, anchorEl: null });
  };

  handleChange = (e) => {
    this.props.handleChange(e);
  };

  render() {
    return (
      <div className="header">
        {this.props.loggedIn === true ? (
          <Fragment>
            <div>
              <header className="logo" onClick={this.logoClickHandler}>
                Image Viewer
              </header>
            </div>
            <div className="header-right-section">
              {this.props.showSearch ? (
                <Input
                  className="search"
                  type="search"
                  placeholder="Search..."
                  p={5}
                  onChange={(e) => this.handleChange(e)}
                  disableUnderline
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              ) : null}
              <IconButton id="profile-icon" onClick={this.profileClickHandler}>
                <Avatar
                  variant="circle"
                  alt="profile_picture"
                  style={{ border: "2px solid whitesmoke" }}
                  src={this.props.dpUrl}
                />
              </IconButton>
              <div>
                <Menu
                  open={this.state.openMenu}
                  onClose={this.menuCloseHandler}
                  anchorEl={this.state.anchorEl}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  keepMounted
                >
                  {this.props.showMyAccount ? (
                    <MenuItem onClick={this.myAccountClickHandler}>
                      <Typography>My Account</Typography>
                      <Divider variant="middle" />
                    </MenuItem>
                  ) : null}
                  {this.props.showMyAccount ? (
                    <Divider variant="middle" />
                  ) : null}
                  <MenuItem onClick={this.logoutClickHandler}>
                    <Typography>Logout</Typography>
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </Fragment>
        ) : (
          <div>
            <header className="logo">Image Viewer</header>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
