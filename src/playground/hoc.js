// Higher order component (HOC) - a component (HOC) that renders another component
import React from "react";
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}></WrappedComponent>
    </div>
  );
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props}></WrappedComponent>
      ): (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"></AdminInfo>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details"></AuthInfo>, document.getElementById('app'));
