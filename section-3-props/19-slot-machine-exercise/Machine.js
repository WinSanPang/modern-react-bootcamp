class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = (s1 === s2) && (s2 === s3);
    const slots = {fontSize: '60px', backgroundColor: 'grey'};

    return (
      <div className="Machine">
        <label htmlFor="textInput"></label>
        <h1 style={slots}>{s1} {s2} {s3}</h1>
        <h2 
          className={winner ? 'Winner' : 'Loser'} 
          style={{fontSize: '30px'}}>
            {winner ? 'Winner! :D' : 'Loser! :('}</h2>
      </div>
    )
  }
}