import React from "react";

export default function Alert(props) {
  return (
     <div style={{ height: "50px" }}>
      {props.alert && (
      <div>
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{props.alert}</strong>
        </div>
      </div>
      )}
    </div>
  );
}
