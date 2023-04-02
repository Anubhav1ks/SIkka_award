import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import confirm from "../../../Assets/images/confirm.svg"
import Modal from '@mui/material/Modal';

const Popup = ({ open, handleClose }) => {


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="box-model">
                    <div >
                        <div>
                            <div>
                                <img src={confirm} alt="tick"/>
                                <br/>
                                <span className='head-1'>Submitted</span>
                            </div>
                            <div className='center'>
                                <span className='head-2'>Thank you for participating. Your Application has been submitted.</span>
                                <br />
                                <span className='head-2'> We will notify you whenever the results are out.</span>
                            </div>
                        </div>
                        <div className='center center-button'>
                            <Button className="nav-button" id='one' onClick={handleClose}>HOMEPAGE</Button>
                            <Button className="nav-button" id='two'>VIEW APPLICATION</Button>

                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default Popup;