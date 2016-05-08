var React = require('react');
var PropTypes = React.PropTypes;

function ChirpInput(props) {
  return (
    <div className="row">
      <form onSubmit={props.onTextSave}>
        <div className="col-md-9"
             style={{padding: 0}}>
          <input type="text" className="form-control"
                 value={props.text}
                 onChange={props.onTextChange}/>
        </div>
        <div className="col-md-3" style={{padding: 0}}>
          <button className="btn btn-primary pull-right" type="submit" style={{width: '90%'}}>Chirp</button>
        </div>
      </form>
    </div>
  );
}

ChirpInput.propTypes = {
  text: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onTextSave: PropTypes.func.isRequired
};

module.exports = ChirpInput;