import React, { useEffect, useState, forwardRef } from "react";
import {
  TextField,
  CircularProgress,
  Avatar,
  IconButton,
  Paper,
  Popover,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { connect } from "react-redux";
import {
  getTotalGoodHobbyChat,
  addTotalGoodHobbyChat,
  deleteGoodHobbyChat,
} from "../../../../redux/actions/messagesActions";
import FlipMove from "react-flip-move";

const GoodHobbies = forwardRef(
  (
    {
      getTotalGoodHobbyChat,
      generalMessages,
      deleteGoodHobbyChat,
      addTotalGoodHobbyChat,
      auth,
    },
    ref
  ) => {
    const [input, setInput] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [_id, set_Id] = useState();

    useEffect(() => {
      getTotalGoodHobbyChat();
    }, [getTotalGoodHobbyChat]);

    const onSubmitForm = (e) => {
      e.preventDefault();
      const values = {
        name: auth.first_name,
        email: auth.email,
        message: input,
      };
      addTotalGoodHobbyChat(values);
      setInput("");
    };

    const deleteButtonMessage = () => {
      deleteGoodHobbyChat(_id);
      setAnchorEl(null);
    };

    const handleClick = (event, id) => {
      setAnchorEl(event.currentTarget);
      set_Id(id);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
      <>
        <div
          className={`ChatDashboard__ChatSystem ${
            generalMessages.loadingGood && "active"
          }`}
        >
          <FlipMove>
            {generalMessages.loadingGood ? (
              <CircularProgress size={100} style={{ color: "#7733FF" }} />
            ) : generalMessages?.goodMessages?.length === 0 ? (
              <p
                style={{
                  color: "#7733FF",
                  textAlign: "center",
                  marginTop: "50px",
                  fontSize: "35px",
                  fontWeight: "800",
                }}
              >
                No chat at the moment
              </p>
            ) : (
              generalMessages?.goodMessages?.map(
                ({ _id, name, message, email }, i) => {
                  return (
                    <div
                      className={`ChatDashboard__Chat__Person ${
                        email === auth.user.email && "active"
                      }`}
                      key={_id}
                      ref={ref}
                    >
                      <Avatar className="Avatar__">{name.charAt(0)}</Avatar>
                      <Paper className="ChatDashboard__Paper">
                        {email === auth.user.email ? (
                          <div>
                            <IconButton
                              aria-describedby={id}
                              variant="contained"
                              color="primary"
                              onClick={(e) => handleClick(e, _id)}
                              className="PopOver__Button"
                            >
                              <MoreHorizIcon style={{ color: "#fff" }} />
                            </IconButton>
                            <Popover
                              id={id}
                              open={open}
                              anchorEl={anchorEl}
                              onClose={handleClose}
                              style={{ marginTop: "10px" }}
                              anchorOrigin={{
                                vertical: "center",
                                horizontal: "center",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                              }}
                              elevation={0}
                            >
                              <div style={{ background: "#FF5252" }}>
                                <IconButton
                                  style={{ fontSize: "10px", color: "#fff" }}
                                  onClick={deleteButtonMessage}
                                >
                                  <DeleteIcon style={{ fontSize: "15px" }} />
                                </IconButton>
                              </div>
                            </Popover>
                          </div>
                        ) : (
                          ""
                        )}
                        <p>{message}</p>
                      </Paper>
                    </div>
                  );
                }
              )
            )}
          </FlipMove>
        </div>
        <form className="ChatDashboard__InputField" onSubmit={onSubmitForm}>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter message"
            placeholder="Enter your message here..."
            className="InputField___"
            variant="outlined"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </>
    );
  }
);

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    generalMessages: state.generalMessages,
  };
};

export default connect(mapStateToProps, {
  getTotalGoodHobbyChat,
  addTotalGoodHobbyChat,
  deleteGoodHobbyChat,
})(GoodHobbies);
