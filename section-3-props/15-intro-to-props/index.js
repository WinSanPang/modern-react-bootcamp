class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
          to="Adel" 
          from="Win" 
          num={3}
          data={[1, 2, 3]}
          bangs={4}
          img="https://images.unsplash.com/photo-1505497100-73ddb5317fa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
        <Hello 
          to="Win" 
          num={2}
          data={[4, 5, 6]}
          img="https://66.media.tumblr.com/tumblr_lk8708vALl1qi81ioo1_500.jpg"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));