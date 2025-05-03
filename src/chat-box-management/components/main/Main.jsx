import { useEffect, useState } from "react";
import "./style.css";
import "../../utils/utils.css";
export function Main() {
  return (
    <main>
      <div className=" section-1">
        <div className="section-wrapper section-1-wrapper center-flex cf-gap2">
          <div className="section-1-header center-flex cf-space-between">
            <div>
              <h2>My ChatBot</h2>
              <p className="p">
                This is a simple chat bot that can be used to answer questions
                and provide information.
              </p>
            </div>
            <div>
              <button className="button-secondary">Message</button>
            </div>
          </div>

          <div className="table-cont">
            <table className="section-1-body table">
              <tbody>
                <tr>
                  <td>
                    <p>Market Place Audio Message</p>
                  </td>
                  <td>
                    <p>Edited Now</p>
                  </td>
                  <td>
                    <p>Facebook Manager</p>
                  </td>
                  <td>
                    <button>...</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Auto Play Dok</p>
                  </td>
                  <td>
                    <p>Edited 1 mins ago</p>
                  </td>
                  <td>
                    <p>Instagram</p>
                  </td>
                  <td>
                    <button>...</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Product</p>
                  </td>
                  <td>
                    <p>Edited 5 mins ago</p>
                  </td>
                  <td>
                    <p>Shopify</p>
                  </td>
                  <td>
                    <button>...</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
