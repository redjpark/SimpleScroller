import React from "react";
import { useScroller } from "../useScroller";
import "semantic-ui-css/semantic.min.css";

export default {
  title: "UseScroller",
};

export const UseScrollerExample = () => {
  const scroller = useScroller({ y: 200, isSmooth: true });
  const scroll2Top = useScroller({ y: 0, isSmooth: true });

  return (
    <div className="ui container" style={{ height: 3000 }}>
      <div class="ui top attached">
        <button onClick={scroller}>Scroll!</button>
      </div>

      <div class="ui list">
        <div class="item">
          <img
            class="ui avatar image"
            src="https://semantic-ui.com/images/avatar2/small/rachel.png"
          />
          <div class="content">
            <a class="header">Rachel</a>
            <div class="description">
              Last seen watching{" "}
              <a>
                <b>Arrested Development</b>
              </a>{" "}
              just now.
            </div>
          </div>
        </div>
        <div class="item">
          <img
            class="ui avatar image"
            src="https://semantic-ui.com/images/avatar2/small/lindsay.png"
          />
          <div class="content">
            <a class="header">Lindsay</a>
            <div class="description">
              Last seen watching{" "}
              <a>
                <b>Bob's Burgers</b>
              </a>{" "}
              10 hours ago.
            </div>
          </div>
        </div>
        <div class="item">
          <img
            class="ui avatar image"
            src="https://semantic-ui.com/images/avatar2/small/matthew.png"
          />
          <div class="content">
            <a class="header">Matthew</a>
            <div class="description">
              Last seen watching{" "}
              <a>
                <b>The Godfather Part 2</b>
              </a>{" "}
              yesterday.
            </div>
          </div>
        </div>
        <div class="item">
          <img
            class="ui avatar image"
            src="https://semantic-ui.com/images/avatar/small/jenny.jpg"
          />
          <div class="content">
            <a class="header">Jenny Hess</a>
            <div class="description">
              Last seen watching{" "}
              <a>
                <b>Twin Peaks</b>
              </a>{" "}
              3 days ago.
            </div>
          </div>
        </div>
        <div class="item">
          <img
            class="ui avatar image"
            src="https://semantic-ui.com/images/avatar/small/veronika.jpg"
          />
          <div class="content">
            <a class="header">Veronika Ossi</a>
            <div class="description">Has not watched anything recently</div>
          </div>
        </div>
      </div>
      <div class="ui bottom attatched">
        <button onClick={scroll2Top}>Scroll to Top!</button>
      </div>
    </div>
  );
};
