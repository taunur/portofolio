import React from "react";
import { Link } from "react-router-dom";

export default function PageErrorMessage({
  title = "404",
  body = "The page you’re looking for doesn’t exist.",
}) {
  return (
    <>
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
          <h1 class="display-1 fw-bold">{title}</h1>
          <p class="fs-3">
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">{body}</p>
          <Link to="/" class="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}
