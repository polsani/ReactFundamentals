var React = require('react');

function puke(obj){
    return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function Results(props){
    return(
        <div>Results: {puke(props)}</div>
    )
}

Results.propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    playersInfo: React.PropTypes.array.isRequired,
    scores: React.PropTypes.array.isRequired
}

module.exports = Results;
