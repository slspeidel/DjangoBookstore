var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

class BookModule extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let count = this.props.count;
        return (
            <div>
                <p className="lead">We have {count} elegant tomes!</p>
                <button className="btn btn-succeed">button</button>
            </div>
        )
    }
}
BookModule.defaultProps = {count: 10}


const provideContext =
  (childContextTypes, getChildContext) => (Component) => {

    class ContextProvider extends React.Component {
      childContextTypes: childContextTypes;
      getChildContext: (this) => getChildContext;

      render() {
        return <Component {...props} />;
      }
    }

    return ContextProvider;
  };

const consumeContext = (contextTypes) => (Component) => {
  /* The context is passed as props. This way the component is
   completely decoupled from the context API.
  */
  const ContextConsumer = (props, context) =>
    <Component {...props} {...context} />;
  ContextConsumer.contextTypes = contextTypes;
  return ContextConsumer;
};

BookModule.defaultProps = {'count': 10};

const ChildwithContext = consumeContext({
  count: PropTypes.number  // this works, see import of PropTypes
})(BookModule);
//ChildwithContext.PropTypes = {
//    count: PropTypes.number  // this works
//}

ReactDOM.render(
    <BookModule />,
    document.getElementById('bookapp')
);