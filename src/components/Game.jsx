import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Quests from './Quests';
import './css/Game.css';
import TopInfobar from './TopInfobar';

class Game extends React.Component {
  render() {
    return (
      <>
        <TopInfobar />
        <section className="game-question">
          <Quests />
        </section>
      </>
    );
  }
}

Game.propTypes = {
  email: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.login.email,
  playerName: state.login.playerName,
  score: state.update.score,
});
// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, null)(Game);
