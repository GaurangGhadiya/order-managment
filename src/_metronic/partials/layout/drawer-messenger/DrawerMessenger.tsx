/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {KTSVG} from '../../../helpers'
import {ChatInner} from '../../chat/ChatInner'
import { AiOutlineClose } from 'react-icons/ai';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material';

const DrawerMessenger: FC = () => (
  <div
    id='kt_drawer_chat'
    className='bg-white'
    data-kt-drawer='true'
    data-kt-drawer-name='chat'
    data-kt-drawer-activate='true'
    data-kt-drawer-overlay='true'
    data-kt-drawer-width="{default:'300px', 'md': '500px'}"
    data-kt-drawer-direction='end'
    data-kt-drawer-toggle='#kt_drawer_chat_toggle'
    data-kt-drawer-close='#kt_drawer_chat_close'
  >
    <div className='card w-100 rounded-0' id='kt_drawer_chat_messenger'>
      <div className='card-header pe-5' id='kt_drawer_chat_messenger_header'>
        <div className='card-title'>
          <div className='d-flex justify-content-between align-items-center me-3 pt-4' style={{width:"100%"}}>
            <a href='#' className='fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1'>
              Filter Your Order 
            </a>
            <div className="close text-primary" id='kt_drawer_chat_close'>
              <AiOutlineClose />
            </div>
          </div>
        </div>
        <div className='card-toolbar' style={{width:"100%"}}>
        <Accordion expanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Fulfillment status</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
  <FormControlLabel control={<Checkbox />} label="Fulfilled" />
  <FormControlLabel control={<Checkbox />} label="Unfulfilled" />
  <FormControlLabel control={<Checkbox />} label="Partially fulfilled" />
  <FormControlLabel control={<Checkbox />} label="Canceled" />
</FormGroup>
        </AccordionDetails>
      </Accordion >
      <Accordion expanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Payment Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
  <FormControlLabel control={<Checkbox />} label="Paid" />
  <FormControlLabel control={<Checkbox />} label="unpaid" />
  <FormControlLabel control={<Checkbox />} label="Refunded" />
</FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Date</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Custom Dates" />
    <FormControlLabel value="male" control={<Radio />} label="Last 24 Hours" />
  </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <hr />
      <div className='d-flex justify-content-between' style={{width:"100%"}}>
        <h5>No Filters applied</h5>
        <span className='text-secondary'>Clear Selection</span>
      </div>
      <hr />
      <div className="Filter_btn mb-5">
        <button className='btn btn1 border-1'>Save This View</button>
        <button className='btn btn2 ms-3 bg-primary text-white border-0'>Done</button>
      </div>

        </div>
      </div>
    </div>
  </div>
)

export {DrawerMessenger}
