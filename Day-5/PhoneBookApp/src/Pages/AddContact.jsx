import React from "react";
import store from "../Assets/Redux/Store";

function AddContact() {
  return (
    <>
      <p style={{ color: "white" }}>Add contact page...</p>
      <p style={{ color: "white" }}> {store.getState().email} </p>
      <div className="container-fluid">

      <form>
        <div className="form-group">
          <label className="text-white p-2">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Name"
            />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label className="text-white p-2">Mobile number</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Mobile number"
            />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label className="text-white p-2">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label className="text-white p-2">Group</label>
          <input
            type=""text
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter group name"
            />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="pt-4">
        <button type="submit" className="btn btn-primary d-flex align-items-center">
          Submit
        </button>
        </div>
      </form>
            </div>
    </>
  );
}

export default AddContact;
