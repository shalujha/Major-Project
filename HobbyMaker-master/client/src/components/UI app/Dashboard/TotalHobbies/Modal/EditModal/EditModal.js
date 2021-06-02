import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CancelIcon from "@material-ui/icons/Cancel";
import { connect } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import "./EditModal.scss";
import { IconButton } from "@material-ui/core";

const EditModal = ({
  open,
  handleClose,
  editHobbyValue,
  editRateHobbyValue,
  editDescHobbyValue,
  onChangeValue,
  onChangeValueRate,
  onChangeValueDesc,
  closeModal,
  actionForm,
  hobbyErr,
}) => {
  return (
    <div className="EditModal__">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className="EditModal__Dialog"
      >
        <IconButton className="EditModal__CloseButton" onClick={closeModal}>
          <CancelIcon className="Cancel__" />
        </IconButton>

        <DialogTitle
          id="responsive-dialog-title"
          className="EditModal__DialogTitle"
        >
          {hobbyErr.message && (
            <Alert severity="error" className="EditModal__ErrorMessage">
              {hobbyErr.message}
            </Alert>
          )}
          <p>EDIT YOUR HOBBY</p>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={actionForm} className="EditModal_FormSubmission">
            <TextField
              label="Hobby"
              placeholder="Your hobby..."
              type="hobby"
              name="hobby"
              variant="outlined"
              className="EditModal__HobbyInput"
              value={editHobbyValue}
              onChange={onChangeValue}
            />
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                Hobby Rate
              </InputLabel>

              <Select
                id="demo-simple-select-outlined-label"
                label="Hobby Rate"
                variant="outlined"
                value={editRateHobbyValue}
                onChange={onChangeValueRate}
                className="EditModal__HobbyRate"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Hobby Description"
              placeholder="Hobby Description..."
              type="desc"
              name="desc"
              variant="outlined"
              className="EditModal__HobbyDescription"
              value={editDescHobbyValue}
              onChange={onChangeValueDesc}
            />
            <div className="EditModal__Buttons">
              <Button type="submit" className="EditModal__ConfirmEditButton">
                CONFIRM
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hobbyErr: state.hobbyErr,
});

export default connect(mapStateToProps, null)(EditModal);
