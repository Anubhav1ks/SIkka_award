import { Button } from "@mui/material";
import React, { useState } from "react";
import { SUBMITFORM } from "../../../utils/services";
import Popup from "./popup";

function MyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [researchPaper, setResearchPaper] = useState(null);
  const [filename, setfilename] = useState("");
  const [loading, setloading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = new FormData();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setloading(true);
    validateSelectedFile();
    if (isSuccess) {
      form.append("firstname", firstName);
      form.append("lastname", lastName);
      form.append("email", email);
      form.append("password", password);
      form.append("mobileNumber", mobileNumber);
      form.append("dob", birthDay + birthMonth + birthYear);
      form.append("myfile", researchPaper);
      console.log("hello");
      await SUBMITFORM(form)
        .then((res) => {
          setloading(false);
          handleOpen();
        })
        .catch((err) => console.log(err));
    }

    setloading(false);

    // handle form submission
  };
  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  const validateSelectedFile = () => {
    const MIN_FILE_SIZE = 0; // 1MB
    const MAX_FILE_SIZE = 5120; // 5MB

    if (!researchPaper) {
      alert("Please choose a file");
      setResearchPaper(null);
      setIsSuccess(false);
      return;
    }

    const fileSizeKiloBytes = researchPaper.size / 1024;

    if (fileSizeKiloBytes < MIN_FILE_SIZE) {
      alert("File size is less than minimum limit");
      setResearchPaper(null);
      setIsSuccess(false);
      return;
    }
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      alert("File size is greater than maximum limit");
      setResearchPaper(null);
      setIsSuccess(false);
      return;
    }

    // ("")
    setIsSuccess(true);
  };

  const handleFileChange = (event) => {
    setfilename(event.target.files[0].name);
    setResearchPaper(event.target.files[0]);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <form className="form-container">
        <div>
          <label>Full Name:</label>
          <div>
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <br />
        <div>
          <label>Email Address:</label>
          <input
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <br />
        <div className="password">
          <div>
            <label>Password:</label>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <label>Repeat Password:</label>
            <input
              placeholder="Repeat Password"
              type="password"
              value={repeatPassword}
              onChange={(event) => setRepeatPassword(event.target.value)}
            />
          </div>
        </div>
        <br />
        <div>
          <label>Mobile Number:</label>
          <input
            placeholder="Mobile Number"
            type="tel"
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
            onBlur={(event) => {
              const regexPattern = /^[0-9]{10}$/; // regular expression pattern
              if (!regexPattern.test(event.target.value)) {
                alert("Please enter a valid 10-digit mobile number.");
                setMobileNumber(""); // clear the input field
              }
            }}
            required
          />
        </div>
        <br />
        <div>
          <label>Date of Birth:</label>
          <div>
            <select
              value={birthDay}
              onChange={(event) => setBirthDay(event.target.value)}
            >
              <option value="">Date</option>
              {[...Array(31)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            <select
              value={birthMonth}
              onChange={(event) => setBirthMonth(event.target.value)}
            >
              <option value="">Month</option>
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="Jun">Jun</option>
              <option value="Jul">Jul</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </select>
            <select
              value={birthYear}
              onChange={(event) => setBirthYear(event.target.value)}
            >
              <option value="">Year</option>
              {[...Array(41)].map((_, index) => (
                <option key={index} value={1983 - index}>
                  {1983 - index}
                </option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <div>
          <label>Research Paper (.pdf)*:</label>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            accept=".pdf"
            style={{ display: "none" }}
          />
          {researchPaper == null ? (
            <Button className="nav-button" onClick={handleButtonClick}>
              Upload File
            </Button>
          ) : (
            <Button
              className="nav-button-2"
              style={{ color: "#fff", background: "#11111" }}
              disabled
            >
              {filename}
            </Button>
          )}
        </div>
        <br />
        <div>
          <span>
            Note: Kindly fill the details carefully as it will be printed on the
            award trophy, certificates, etc.
          </span>
        </div>
        <br />
        <div>
          {researchPaper == null ? (
            <Button className="nav-button" id="submit-button" disabled>
              Submit Application
            </Button>
          ) : (
            <Button
              className="nav-button"
              id="submit-button-2"
              onClick={handleSubmit}
            >
              {loading === true ? "Loading..." : "Submit Application"}
            </Button>
          )}
        </div>
      </form>

      <Popup open={open} handleClose={handleClose} />
    </>
  );
}

export default MyForm;
