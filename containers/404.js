import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <section className="card p-t-80">
        <h3 className="module-title">Oh Snap!</h3>
        <div className="module-subtitle">
          404: we could not find the page you requested
        </div>
      </section>
    );
  }
}
