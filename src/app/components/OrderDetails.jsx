import React from 'react'
import { BiMessageAlt } from 'react-icons/bi';
import { RiRefund2Fill } from 'react-icons/ri';
import { TbFileInvoice } from 'react-icons/tb';
import { BsPencil, BsThreeDots } from 'react-icons/bs';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@mui/material';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [{
    title:'Add a note(Your customers wont see this)',
    dis:"An ad group contains one or more ads which target a shared set of keywords."
  }, {
    title:"Jun 9,2022 3:53 P.M.",
    dis:"order pripaid"
  },
  {
    title:"Jun 9,2022 3:53 P.M.",
    dis:"order packing"
  },
  {
    title:"Jun 9,2022 3:53 P.M.",
    dis:"order Tracking"
  },
  {
    title:"Jun 9,2022 3:53 P.M.",
    dis:"order deliver"
  },
  {
    title:"Jun 9,2022 3:53 P.M.",
    dis:"order Reaturn"
  },];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <><textarea style={{width:"100%"}}></textarea></>;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
              case 3:
                return 'An ad group contains one or more ads which target a shared set of keywords.';
                case 4:
                  return 'An ad group contains one or more ads which target a shared set of keywords.';
                  case 5:
                    return 'An ad group contains one or more ads which target a shared set of keywords.';
                
    default:
      return 'Unknown step';
  }
}


const OrderDetails = () => {
  const steps = getSteps();
  const [activeStep, setActiveStep] = React.useState(0);

  const classes = useStyles();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <>
    <nav class="navbar sticky-top navbar-light bg-light ">
  <div  style={{width:"100%"}}>
  <div className='d-flex justify-content-between align-items-center flex-wrap' style={{width:"100%"}}>
      <div className="">
       <span className='ps-2'>
       Order > Order #10416
       </span>
       <div className='d-flex align-items-center space_between px-1'>
      <h1 className='display-6'>
        Order #10416
       </h1>
       <div>
       <a className="mx-4 box_paid ">
                Paid
              </a>
              <a className=" box_paid">
                Fulfilled
              </a>
       </div>
      </div>
      </div>
     <div className="">
     <select className='text-primary' name="" id="">
                  <option value="More action">More action</option>
                  <option value="Orders">Orders</option>
                </select>
     </div>
    </div>
  </div>
</nav>

<span className='light_Gray ps-1 ms-1'>Place on Jun 4,2022, 4:58 PM</span>
   
    <div className="row mt-5">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-title p-4 m-0">
            <h2 className='m-0'>Order Summary (1 item)</h2>
          </div>
          <div className="pro_ship">
            <h6 className='m-0'>Product to Ship</h6>
            <span className='icon_dot'><BsThreeDots /></span>
          </div>
          <table  className='m-4'>
            <tr className='d-flex align=items-center justify-content-between flex-wrap'>
              <td><img src="https://picsum.photos/50/50" alt="" style={{borderRadius:"50%"}}/></td>
              <td>
                <h6  className='m-0'>Addiz Metty T-shirt</h6>
                <span className='light_Gray'>Sizes:(M | L | Xl )-SET</span>
              </td>
              <td><p className='m-0'>Fulfilled</p><span className='text-primary'>D22DD22E</span></td>
              <td><p>₹3,580.00</p></td>
              <td><h6>x 1</h6></td>
              <td><p>₹3,580.00</p></td>
            </tr>
          </table>
        </div>
        <div className="card mt-5">
          <div className="card-title p-5 pb-0 d-flex justify-content-between align-items-center flex-wrap">
            <div className=''>
            <h5>
              Payment Info
            </h5>
            <span className='light_Gray'>
              Paid with Razorpay
            </span>
            </div>
            <p className='text-primary'><TbFileInvoice /> create invioce</p>
          </div>
            <hr />
          <div className="card-body me-5">
            <div className='d-flex justify-content-between align-items-center'>
              <ul style={{listStyleType:"none",lineHeight:"30px"}}>
                <li>Subtotal</li>
                <li>Shipping</li>
                <li>Tax</li>
                <li><h6 className='mt-1'>Total</h6></li>
              </ul>
              <ul style={{listStyleType:"none",lineHeight:"30px"}}>
                <li>₹3,582.00</li>
                <li>₹69.00</li>
                <li>₹0.00</li>
                <li><h6 className='mt-1'>₹3,651.00</h6></li>
              </ul>
            </div>
          </div>
            <hr />
            <div className='px-5 py-2 pb-4 d-flex justify-content-between align-items-center flex-wrap'> <span className='light_Gray'>Payment ID #pay_D1561DE</span><span className='text-primary'><RiRefund2Fill /> Issue Refund</span></div>
        </div>
        <div className="card mt-5 margin_bottom">
        <div className="card-title p-4 pb-0">
          <h1>Order Activity</h1>
        </div>
        <hr />
        <div className="card-body">
        <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label?.title} <h6>{label?.dis}</h6></StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
        </div>
        </div>

      </div>
      <div className="col-lg-4 margin_bottom">
        <div className="card">
      <div className="card-title p-4 m-0  d-flex justify-content-between">
            <h2 className='m-0'>Order Info </h2>
            <span className='text-primary'><BsPencil /></span>
          </div>
          <hr />
          <div className="card-body ms-5 p-3 m-3">
            <h5 className='text-primary'>hermas maradona <BiMessageAlt /></h5>
            <p>hermasmar@gmail.com</p>
            <hr />
            <h5 className='pt-2'>SHIPPING ADDRESS</h5>
            <p>hermas maradona</p>
            <p>1/256,South koira,surat,gujarat,india</p>
            <p>999999555</p>
            <p className='text-primary mb-2'>View Map</p>
            <hr />
            <h5 className='pt-2'>BILLING ADDRESS</h5>
            <p className='pb-2'>Same as shipping address</p>
            <hr />
            <h5 className='pt-2'>DELIVERY METHOD</h5>
            <p>Shipping</p>
            <p className='pb-2'>1-2 Business Days</p>
            <hr />
            <h5 className='pt-2'>SHOP NAME</h5>
            <p>Santhome</p>
          </div>

          </div>
      </div>
    </div>
    </>
  )
}

export default OrderDetails

