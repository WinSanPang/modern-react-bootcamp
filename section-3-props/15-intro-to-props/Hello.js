class Hello extends React.Component {
  static defaultProps = {
    from: 'Your Admirer',
    bangs: 2
  }

  render() {
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <p>Hi to {this.props.to}, love from {this.props.from}{bangs}</p>
        <p>My favourite numbers are: {this.props.data}</p>
        <img src={this.props.img}/>
      </div>
    )
  }
}