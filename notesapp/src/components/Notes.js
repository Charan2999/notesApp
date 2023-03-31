import React from "react";

export default function Notes() {
  return (
    <div className="card" style={{ width:"78%", margin:"auto", backgroundColor:"cyan"}}>
      <div className="card-body">
        <textarea className="textarea" style={{ width:"100%",height:"140px", backgroundColor:"cyan",border:"0", resize:"none", outline:"none"}} placeholder="type some notes"></textarea>
        <button className="btn btn-primary" style={{backgroundColor:"gray", border:"0"}}>save</button>
      </div>
    </div>
  );
}
