import React from "react";
import Swal from "sweetalert2";

export default function SweetAlert() {
  window.onload = function () {
    Swal.fire({
      background: "#191919",
      color: "wheat",
      border: "5px solid red",
      title:
        "<h6>Welcome to my portfolio! I'm thrilled to have you here. Take a moment to explore and get to know me and my work. Whether you're a potential client, colleague, or just someone with a curious mind, I hope you find something that inspires you. Feel free to reach out with any questions or opportunities. Thanks for stopping by!<h6/>",
      icon: "success",
    });
  };
}
