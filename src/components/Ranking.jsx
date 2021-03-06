import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './css/Ranking.css';


class Ranking extends React.Component {
  render() {
    const { history: { push }, ranking } = this.props;
    //const ranking = JSON.parse(localStorage.getItem('ranking'));
    const rankingList = ranking.sort((score1, score2) => (
      Number(score2.score) - Number(score1.score)
    ));
    return (
      <section className="rankingDiv">
        <h1 data-testid="ranking-title">Ranking</h1>
        { rankingList.map((player, index) => (
          <div key={ index } className="rankListDiv">
            <p>{index + 1}</p>
            <div className="playerInfoDiv">
              <img src={ player.picture } alt="player-img" />
              <p data-testid={ `player-name-${index}` }>{player.name}</p>
              <p data-testid={ `player-score-${index}` }>{player.score}</p>
            </div>
          </div>
        ))}
        <button
          data-testid="btn-go-home"
          onClick={ () => push('/') }
          type="button"
          className="cool"
        >
          Home
        </button>
      </section>
    );
  }
}

Ranking.propTypes = {
  ranking: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  ranking: state.ranking,
});

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps,null)(Ranking);

