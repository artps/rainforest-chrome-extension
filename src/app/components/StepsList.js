/**
 * @jsx React.DOM
 */

var React = require('react');
var StepsListItem = require('./StepsListItem');

function StepsList(props) {
  var steps = props.steps.map(function(step) {
    return <StepsList step={step} />;
  });

  return (
    <div className="b-steps_list">{steps}</div>
  );
}

module.exports = StepsList;
