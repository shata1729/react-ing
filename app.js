{/* <div id="parent">
  <div id="child">
    <h1>This is a heading</h1>
  </div>
</div> */}

const parent = React.createElement('div', { id: 'parent' },
  React.createElement('div', { id: 'child' },
    React.createElement('h1', {}, 'This is a heading')))
// const heading = React.createElement('h1', {}, 'This is a heading')

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)
