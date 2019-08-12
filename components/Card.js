import React from "react";

const Card = props => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-title">{props.icon.category}</p>
      <a href="#" className="card-header-icon" aria-label="more options">
        <span className="icon">
          <i className="fas fa-angle-down" aria-hidden="true" />
        </span>
      </a>
    </header>
    <div className="card-content">
      <div className="content">
        <img
          className="card-thumb-image"
          src={`${props.icon.path}.svg`}
          alt={`${props.icon.path}`}
        />
        <br />
        <br />
        <b>{props.icon.name}</b>
      </div>
    </div>
    <footer className="card-footer">
      <a href={`${props.icon.path}.png`} download className="card-footer-item">
        Download Png
      </a>
      <a href={`${props.icon.path}.svg`} download className="card-footer-item">
        Download Svg
      </a>
    </footer>
  </div>
);

export default Card;
