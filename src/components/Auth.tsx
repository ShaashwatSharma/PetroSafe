import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import {DATABASE_URL} from "../config"


export const Auth=({ type }:{type:"signup"| "signin"})=>{

    const navigate=useNavigate();
    const [userInputs, setUserInputs]=useState({
        name:"",
        email:"",
        password:""
    });
    async function sendRequest(){
        try{
            const response= await axios.post(`${DATABASE_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,userInputs);
            const token =response.data.token;
            localStorage.setItem("token",`Bearer ${token}`);
            console.log("navigate to dashboard");
            navigate("/dashboard");
        }
        catch(e){
            alert("Warning : Something went wrong please try again ");
        }
    }
    
return (
    <>
      <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
          <div >
            <div>
              <div className="px-10 ">
                <div className=" text-4xl font-extrabold ">
                  Create an Account
                </div>
                <div className="text-slate-400 text-sm flex justify-center">
                  {type==="signup"?"Already have an account ?":"Don't have an account ?"}
                  <Link className="pl-2 underline" to={type==="signin"?"/signup":"/signin"}>
                   {type==="signin"?"Signup":"Signin"}
                  </Link>
                </div>
              </div>
              <div className="pt-8">
               {type==="signup"? <LabelledInput
                  label="Name"
                  placeholder="Sirus Doe"
                  onchange={(e) => {
                    setUserInputs({
                      ...userInputs,
                      name: e.target.value,
                    });
                  }}
                />:null}
                <LabelledInput
                  label="Email"
                  placeholder="sirusdoe1@gmail.com"
                  onchange={(e) => {
                    setUserInputs({
                      ...userInputs,
                      email: e.target.value,
                    });
                  }}
                />
                <LabelledInput
                  label="Password"
                  type={"password"}
                  placeholder="Password01"
                  onchange={(e) => {
                    setUserInputs({
                      ...userInputs,
                      password: e.target.value,
                    });
                  }}
                />
                <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{type==="signup"?"Sign up":"Sign in"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


interface InputlableType {
  label: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}


function LabelledInput({ label, placeholder, onchange, type }:InputlableType) {
  return (
    <>
      <div>
        <label className="block mb-2 text-sm font-semibold text-black pt-4">
          {label}
        </label>
        <input
          onChange={onchange}
          type={type || "text"}
          id="first_name"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
}
