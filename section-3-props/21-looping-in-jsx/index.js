class App extends React.Component {
  render() {
    return (
      <div>
        <Friend 
          name="Kai"
          hobbies={['Dancing', 'Singing', 'Piano']}
        />
        <Friend 
          name="Adel"
          hobbies={['Drawing', 'Coding', 'Guitar']}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))