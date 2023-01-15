
import App from './Component/App'
//using reactdom
const react = require('react')
const ReactDom = require('react-dom')

function MyComponent() {
  return ( <App /> );
}
ReactDom.render(<MyComponent />, document.getElementById("root"));