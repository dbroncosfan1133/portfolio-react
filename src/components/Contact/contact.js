import React from "react";
import Resume from "./Curtis_Allen_Resume.pdf";
import "../../pages/pages.css";

class ContactInfo extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <header className="card-header">
            <h1 className="about">Contact Me</h1>
          </header>
          <div className="card-content">
            <div className="content">
              <div className="table-container">
                <table className="table">
                  <thead>
                    <th>Links:</th>
                    <th></th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="icon">
                          <i className="has-icons-left fab fa-github"></i>
                        </span>
                        <span>GitHub Page:</span>
                      </td>
                      <td>
                        <a href="https://github.com/dbroncosfan1133">dbroncosfan1133</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="icon">
                          <i className="fab fa-linkedin-in"></i>
                        </span>
                        <span>Linkedin Page:</span>
                      </td>
                      <td>
                        <a href="https://www.linkedin.com/in/curtis-allen-726198156">Curtis Allen</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="icon">
                          <i className="fas fa-at"></i>
                        </span>
                        <span>Email:</span>
                      </td>
                      <td>
                        <span>dbroncosfan@gmail.com</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="icon">
                          <i className="fas fa-file"></i>
                        </span>
                        <span>My Resume:</span>
                      </td>
                      <td>
                        <a href={Resume}>My Resume</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactInfo;