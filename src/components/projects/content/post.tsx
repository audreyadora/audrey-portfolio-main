import React, { useEffect } from "react";
import { useParams } from "react-router";

function post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div className="container">
        <h1 className="mt-5">This is a Post Title</h1>
        <h6 className="mb-5">The post slug is, {postSlug}</h6>
        <p>
          I wake up
          And the day feels broken
          I tilt my head
          I'm trying to get an angle
          'Cause the evening
          I've always longed for
          It could still happen
        </p>
        <p>
          How do I master
          The perfect day
          Six glasses of water
          Seven phone calls
          If you leave it alone
          It might just happen
          Anyway
        </p>
        <p>
          It's not up to you
          Oh it never really was
          It's not up to you
          Oh it never really was
          It's not up to you
          Well it never really was
          It's not up to you
        </p>
        <p>
          If you wake up
          And the day feels a-broken
          Just lean into the crack
          (Just lean into the crack)
          And it will tremble
          Ever so nicely
          Notice how it sparkles
          Down there
        </p>
        <p>
          I can decide
          What I give
          But it's not up to me
          What I get given
          Unthinkable surprises
          About to happen
          But what they are
        </p>
        <p>          
          It's not up to you
          It's not up to you
          Well it never really was
          It's not up to you
          Oh it never really was
          It's not up to you
          Oh it never really was
          It's not up to you
          Oh, me, share
          It's not up to you
          It's not up to you
          It's not up to you
          Oh, it never really was
          It's not up to you
          Well it never really was
          It's not up to you
          It's not up to you
          It's not up to you
          It's not up to you
        </p>
        <p>
          There's too much
          Clinging
          To peak
          There's too much
          Pressure
        </p>
      </div>
    </div>
  );
}

export default post;
