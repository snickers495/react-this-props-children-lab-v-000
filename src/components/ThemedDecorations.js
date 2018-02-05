// Code ThemedDecoration Component Here
import ThemedDecoration from 'react';
export default class ThemedDecoration extends React.Component {
  render(){
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return (
        <div className="some-component-special-class">{child}</div>
      );
    });
    return(
      <div>

      </div>
    )
  }
}
