import {useState} from 'react'
import TextField from '@mui/material/TextField';
import './WatchList.css';

export const WatchList = (classes) => {
  const [visible, setVisible] = useState(false);

  const containerStyle = {
    inputRoot: {
      width: 200,
      height: 30,
      fontSize: 12
    },
    labelRoot: {
      fontSize: 10,
      color: "red",
      "&$labelFocused": {
        color: "purple"
      }
    },
    labelFocused: {}
  };

  return (
    <>
      <button className="watch__user_info" onClick={() => setVisible(!visible)}>
        <img src="/images/watch__info_user.svg" alt="watch icon" />
      </button>

  <div className={visible ? "overlay" : ""}>
    <form className={visible ? "watch__travel_info-visible" : "watch__travel_info"}>
      <h3 className="popup__title mt-10">Traveler Information</h3>
      <span onClick={() => setVisible(!visible)} className="close close__popup">+</span>
      <div className="inputs__info">
          <TextField
            className="height__input"
            sx={{m: 0.5}}
            id="outlined-basic"
            label="SURNAME"
            variant="outlined"
            InputProps={{ style: {  height:35, width: 200, paddingBottom: 10 } }}
            InputLabelProps={{ style: { fontSize: 10, paddingBottom: 30 } }}
          />
          <TextField
            sx={{m: 0.5}}
            id="outlined-basic"
            label="FIRST NAME"
            variant="outlined" 
            InputProps={{ style: {  height:35, width: 200, paddingBottom: 10 } }}
            InputLabelProps={{ style: { fontSize: 10, paddingBottom: 30 } }}
          />
          <TextField
            sx={{m: 0.5}}
            id="outlined-basic"
            label="MIDDLE NAME"
            variant="outlined"
            InputProps={{ style: {  height:35, width: 200, paddingBottom: 10 } }}
            InputLabelProps={{ style: { fontSize: 10, paddingBottom: 30 } }}
          />
          <TextField
            sx={{m: 0.5}}
            id="outlined-basic"
            label="DATE OF BIRTH"
            variant="outlined"
            InputProps={{ style: {  height:35, width: 200, paddingBottom: 10 } }}
            InputLabelProps={{ style: { fontSize: 10, paddingBottom: 30 } }}
          />
          <TextField
            sx={{m: 0.5}}
            id="outlined-basic"
            label="NATIONALITY"
            variant="outlined" 
            InputProps={{ style: {  height:35, width: 200, paddingBottom: 10 } }}
            InputLabelProps={{ style: { fontSize: 10, paddingBottom: 30 } }}
          />
          <TextField
            sx={{m: 0.5}} 
            id="outlined-basic" 
            label="GENDER"
            variant="outlined"
            InputProps={{ style: {  height:35, width: 200, paddingBottom: 10 } }}
            InputLabelProps={{ style: { fontSize: 10, paddingBottom: 30 } }}
          />
          <TextField
            sx={{m: 0.5}}
            id="outlined-basic"
            label="PASSPORT"
            variant="outlined"
            InputProps={{ style: {  height:35, width: 200, paddingBottom: 10 } }}
            InputLabelProps={{ style: { fontSize: 10, paddingBottom: 30 } }}
          />
          <TextField
            sx={{m: 0.5}}
            id="outlined-basic"
            label="EXP.DATE"
            variant="outlined"
            InputProps={{ style: {  height:35, width: 200, paddingBottom: 10 } }}
            InputLabelProps={{ style: { fontSize: 10, paddingBottom: 30 } }}
          />

        <div className="form__buttons">
          <input type="submit" value="Remove" className="btn__travel_watch red"/>
          <input type="submit" value="Close" className="btn__travel_watch grey"/>
       </div>
      </div>
    </form>
  </div>
</>
  )
}
