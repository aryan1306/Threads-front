import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import Button from "./../components/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import { getloggedInUser } from "./../redux/actions/user_actions";

const PicCard = styled.div`
  margin: 4rem 1em;
  border-radius: 0.5em;
  box-shadow: 4px 7px 5px 5px lightgrey;
  padding-bottom: 1em;
  h2 {
    text-align: center;
    padding-bottom: 1em;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    border-radius: 50%;
    width: 10%;
    height: 30%;
    margin-bottom: 1em;
  }
  @media (max-width: 769px) {
    img {
      width: 40%;
    }
  }
`;

const SetProfile = ({ getloggedInUser, users: { profile, loading } }) => {
  useEffect(() => {
    getloggedInUser();
  }, [getloggedInUser]);
  return (
    <PicCard>
      <div className='container'>
        <div className='card'>
          <h2>Pick a Profie Photo</h2>
          <div className='wrapper'>
            <img
              src={
                loading
                  ? "https://4anime.to/image/Naruto-Cover.jpg"
                  : profile.avatar
              }
              alt='profile'
            />
            {/* <Button bg='#065FD4'>Upload your image</Button> */}
            <input className='file-button' type='file' name='avatar' />
          </div>
        </div>
      </div>
    </PicCard>
  );
};

SetProfile.propTypes = {
  getProfilePic: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.users.profile,
});
export default connect(mapStateToProps, { getloggedInUser })(SetProfile);
