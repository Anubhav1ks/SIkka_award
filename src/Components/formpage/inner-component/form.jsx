import { Button } from '@mui/material';
import React, { useState } from 'react';
import { SUBMITFORM } from '../../../utils/services';
import Popup from './popup';

function MyForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [researchPaper, setResearchPaper] = useState(null);
    const [filename, setfilename] = useState("")
    const [loading,setloading]=useState(false)
    const form = new FormData();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setloading(true)
        form.append("firstname", firstName)
        form.append("lastname", lastName)
        form.append("email", email)
        form.append("password", password)
        form.append("mobileNumber", mobileNumber)
        form.append("dob", birthDay + birthMonth + birthYear)
        form.append("myfile", researchPaper)
        console.log("hello");
        await SUBMITFORM(form).then((res) => {
        setloading(false)
            handleOpen()
        }).catch((err) => console.log(err))
        setloading(false)

        // handle form submission
    };
    const handleButtonClick = () => {
        document.getElementById('fileInput').click();

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
                        />
                        <input
                            type="text"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <br />
                <div>
                    <label>Email Address:</label>
                    <input
                        placeholder='Email Address'
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <br />
                <div className='password'>
                    <div >
                        <label>Password:</label>
                        <input
                        placeholder='Password'
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div>
                        <label>Repeat Password:</label>
                        <input
                        placeholder='Repeat Password'

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
                    placeholder='Mobile Number'
                        type="tel"
                        value={mobileNumber}
                        onChange={(event) => setMobileNumber(event.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Date of Birth:</label>
                    <div>
                        <input
                            type="text"
                            value={birthDay}
                            onChange={(event) => setBirthDay(event.target.value)}
                            placeholder="DD"
                            maxLength="2"
                        />
                        <input
                            type="text"
                            value={birthMonth}
                            onChange={(event) => setBirthMonth(event.target.value)}
                            placeholder="MM"
                            maxLength="2"
                        />
                        <input
                            type="text"
                            value={birthYear}
                            onChange={(event) => setBirthYear(event.target.value)}
                            placeholder="YYYY"
                            maxLength="4"
                        />
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
                        style={{ display: 'none' }}
                    />
                    {researchPaper == null ?
                        <Button className="nav-button" onClick={handleButtonClick} >Upload File</Button>
                        :
                        <Button className="nav-button-2" style={{ color: "#fff", background: "#11111" }} disabled>{filename}</Button>
                    }


                </div>
                <br />
                <span>Note: Kindly fill the details carefully as it will be printed on the award trophy, certificates, etc.</span>
                <br />
                <div>
                    {researchPaper == null ?
                        <Button className="nav-button" id="submit-button" disabled>Submit Application</Button>
                        :
                        <Button className="nav-button" id="submit-button-2" onClick={handleSubmit}>{loading === true ? "Loading..." : "Submit Application"}</Button>
                    }

                </div>
                
            </form>

            <Popup open={open} handleClose={handleClose} />
        </>
    );
}

export default MyForm;
