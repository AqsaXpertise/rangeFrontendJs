"use client";
import React from "react";

import "@/public/css/gallery-modal-styles.css";
import { Pagination, Navigation } from "swiper/modules";
import ReactPlayer from 'react-player/lazy'
function GallaryModalVideo(props) {
  return (
    <>
      <button
        className="gallerymodalBtn"
        data-bs-toggle="modal"
        data-bs-target="#gallaryModalVideo"
      >
        <i className="fa fa-play" aria-hidden="true"></i>
       PLAY VIDEO
      </button>

      <div
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        id="gallaryModalVideo"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered modal-lg modalBookMeet ">
          <div className="modal-content">
            <div className="modal-header border-0 justify-content-end p-1">
              <button
                type="button"
                className="bg-transparent border-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="bi bi-x-circle text-primary"></i>
              </button>
            </div>

            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            <div className="modal-body  p-0 rounded-1 m-2">
              <div className="row g-0">
                <div className="col-12 col-lg-12 col-md-12 descricalenderCol">
                 

                <div className="d-block w-100">
                <ReactPlayer className='player-wrapper'
                 width='100%'
                onEnded={props.onEnd}
                config={{
                    youtube: {
                        playerVars: {
                            autoplay: 1,
                            controls: 1
                        }
                    }
                }}
                url='https://www.youtube.com/watch?v=-6jlrq7idl8&list=PLiPk70af-7kf5A4vVxIWXr1yMaaoBTOb4' />

                </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default GallaryModalVideo;
