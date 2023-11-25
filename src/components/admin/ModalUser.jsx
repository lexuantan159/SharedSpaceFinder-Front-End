import React, { useState } from "react";
import * as adminsService from "../../services/admin"

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(
      defaultValue || {
        status: "R1",
      }
    );
    const [errors, setErrors] = useState("");
  
    const validateForm = () => {
      if (formState.page && formState.description && formState.status) {
        setErrors("");
        return true; 
      } else {
        let errorFields = [];
        for (const [key, value] of Object.entries(formState)) {
          if (!value) {
            errorFields.push(key);
          }
        }
        setErrors(errorFields.join(", "));
        return false;
      }
    };
  
    const edit = async ()=>{
        
    }
    const handleChange = (e) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formState);
      onSubmit(formState);
  
      closeModal();
  
      if (!validateForm()) return;
  
    };
  
    return (
      <div
        className="modal-container fixed left-0 top-0 w-full h-full bg-bgModalColor flex items-center justify-center"
        onClick={(e) => {
          if (e.target.className === "modal-container") closeModal();
        }}
      >
        <div className="modal rounded p-8 bg-white w-96">
          <h2 className="mb-2">Update Role</h2>
          <form>
            <div className="form-group flex flex-col mb-4">
              <label className="mb-1" htmlFor="status">Role</label>
              <select
              className="border rounded border-black"
                name="status"
                onChange={handleChange}
                value={formState.status}
              >
                <option value="R1">R1</option>
                <option value="R2">R2</option>
                <option value="R3">R3</option>
              </select>
            </div>
            {errors && <div className="error bg-amber-50 text-red-500 p-2 rounded-md mb-6">{`Please include: ${errors}`}</div>}
            <button type="submit" className="btn bg-blue-600 rounded" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default Modal;