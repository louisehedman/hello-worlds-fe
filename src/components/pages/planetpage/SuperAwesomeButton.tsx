import React, { useContext, useState } from "react";
import { AuthContext } from "../../../auth/AuthProvider";
import Login from "../login/Login";
import BookingForm from "./BookingForm";

export interface Props {
  destination: string | undefined;
  distanceToEarth: number | undefined;
  planetName?: string | undefined;
  setApplicationSent?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuperAwesomeButton: React.FC<Props> = ({
  destination,
  distanceToEarth,
  planetName,
}) => {
  const auth = useContext(AuthContext);
  const [applicationSent, setApplicationSent] = useState(false);

  return (
    <>
      <button
        type="button"
        className="p-1 mx-1 my-3 btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Take me there!
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {!auth?.auth()
                  ? "Sign in or register"
                  : `Take me to ${planetName}!`}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {!auth?.auth() ? (
                <Login color={"text-black"} />
              ) : destination && distanceToEarth ? (
                !applicationSent ? (
                  <BookingForm
                    destination={destination}
                    distanceToEarth={distanceToEarth}
                    setApplicationSent={setApplicationSent}
                  />
                ) : (
                  <p>Congrats! Space awaits!</p>
                )
              ) : (
                <>
                  <p>Something went wrong!</p>
                  <p>Please contact support.</p>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAwesomeButton;
