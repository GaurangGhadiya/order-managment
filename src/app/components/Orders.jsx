import React from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import { makeStyles } from "@material-ui/core/styles";
import "../../../src/Order.css"
import { BiFilterAlt } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const useStyles = makeStyles((theme) => ({

  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    boxShadow: "none",
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  card: {
    height: "100%",

    backgroundColor: "#fff",
    border: "none",
    borderRadius: "10px",
  },
}));
const data = [
  {
    order: "#11111",
    Date: "Jun 4,2022",
    Customer: "test test",
    Payment: "pay",
    Fulfillment: "Fulfilled",
    Total: "₹3,651.00"
  },
  {
    order: "#11111",
    Date: "Jun 4,2022",
    Customer: "test test",
    Payment: "pay",
    Fulfillment: "Fulfilled",
    Total: "₹3,651.00"
  },
  {
    order: "#11111",
    Date: "Jun 4,2022",
    Customer: "test test",
    Payment: "pay",
    Fulfillment: "Fulfilled",
    Total: "₹3,651.00"
  },
  {
    order: "#11111",
    Date: "Jun 4,2022",
    Customer: "test test",
    Payment: "pay",
    Fulfillment: "Fulfilled",
    Total: "₹3,651.00"
  }
]
const Orders = () => {

  const classes = useStyles();

  const columns = [
    {
      dataField: "order",
      // filter: textFilter(),
      text: "order",
      sort: true,
      formatter: (cell, row) => {

        return (
          <>
            <div className="d-flex">
              <a className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                {row?.order}
              </a>
            </div>

          </>

        );
      },
    },
    {
      dataField: "Date",
      // filter: textFilter(),
      text: "Date",
      sort: true,
      formatter: (cell, row) => {

        return (
          <>
            <div className="d-flex">
              <a className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                {row?.Date}
              </a>
            </div>

          </>
        );
      },
    }, {
      dataField: "Customer",
      // filter: textFilter(),
      text: "Customer",
      sort: true,
      formatter: (cell, row) => {

        return (
          <>
            <div className="d-flex">
              <a className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                {row?.Customer}
              </a>
            </div>

          </>
        );
      },
    }, {
      dataField: "Payment",
      // filter: textFilter(),
      text: "Payment",
      sort: true,
      formatter: (cell, row) => {

        return (
          <>
            <div className="d-flex">
              <a className="badge badge-light-primary fs-8 fw-bolder">
                {row?.Payment}
              </a>
            </div>

          </>
        );
      },
    },
    {
      dataField: "Fulfillment",
      // filter: textFilter(),
      text: "Fulfillment",
      sort: true,
      formatter: (cell, row) => {

        return (
          <>
            <div className="d-flex">
              <a className="badge badge-light-primary fs-8 fw-bolder">
                {row?.Fulfillment}
              </a>
            </div>

          </>
        );
      },
    },
    {
      dataField: "Total",
      // filter: textFilter(),
      text: "Total",
      sort: true,
      formatter: (cell, row) => {

        return (
          <>
            <div className="d-flex">
              <a className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                {row?.Total}
              </a>
            </div>

          </>
        );
      },
    },
  ];
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true
  };
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap">
      <div className="">
               <h1 className='display-6'>Orders</h1>
               <p>415 Orders | ₹361,877 revenue <span className='text-primary'>See sales analytics</span></p>
      </div>
      <div className="">
      <a
                                
                                className="btn btn-primary font-weight-bolder add_order"
                            >
                                <span className='plus'>+</span> Add New Order
                            </a>
      </div>
      </div>
      <div
        className="content  d-flex flex-column flex-column-fluid  h-100"
        id="kt_content"
      >
        <div className="card card-custom">
          <div className="card-header flex-wrap border-0 pt-6 pb-0">
            <div className="card-title justify-content-between flex-wrap">
              <div className="d-flex align-items-center flex-wrap">
                <p>View:</p>
                <select name="" id="">
                  <option value="All Orders">All Orders</option>
                  <option value="Orders">Orders</option>
                </select>
                <div className="setting-Mobile text-primary">
                  <FiSettings />
                </div>
              </div>
              <div className="d-flex align-items-center flex-wrap filter_search">
                <div class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input type="text" class="form-control" placeholder="Search" />
                </div>
                <div id='kt_drawer_chat_toggle' className="Filter text-primary cursor-pointer">
                  <BiFilterAlt /> Filter
                </div>
                <div className="setting text-primary">
                  <FiSettings />
                </div>
              </div>

            </div>

          </div>
          <div className={`card h-80  d-flex  ${classes.card}`}>
            {/* Body */}
            <div className=" card-body">
              <BootstrapTable
                wrapperClasses="table-responsive"
                bordered={false}
                classes="table table-head-custom table-vertical-center overflow-hidden"
                bootstrap4
                // remote
                keyField="id"
                data={data}
                columns={columns}
                selectRow={selectRow}
              // noDataIndication={() => <NoDataTable />}
              ></BootstrapTable>
              <div className="d-flex justify-content-between  pt-10">

                {/* <div className="my-2">
                <Pagination
                    count={totalpage}
                    page={currentpage}
                    onChange={handleChange}
                    variant="outlined"
                    shape="rounded"
                    className="pagination_"
                />
            </div> */}
                {/* <div className="my-2 my-md-0">
                <div className="d-flex align-items-center pagination-drpdown">
                    <select
                        className="form-control pagination-drpdown1 dropdownPage"
                        id="kt_datatable_search_status"
                        onChange={(e) => handleonchnagespagination(e)}
                        value={pagesize}
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                    </select>
                </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders