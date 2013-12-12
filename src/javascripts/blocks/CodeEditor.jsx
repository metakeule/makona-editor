/** @jsx React.DOM */;
var CodeEditor;

CodeEditor = React.createClass({
  handleChange: function() {
    var lang, text;
    text = this.refs.text.getDOMNode().value;
    lang = this.refs.lang.getDOMNode().value;
    return this.props.handleChange({
      id: this.props.block.id,
      data: {
        text: text,
        lang: lang
      }
    });
  },
  render: function() {
    return (
      <div>
        <textarea value={this.props.block.data.text} ref="text" onChange={this.handleChange}></textarea>
        <br />
        <label>Language: </label><input value={this.props.block.data.lang} ref="lang" onChange={this.handleChange} />
      </div>
    );
  }
});

module.exports = CodeEditor;