// Code ThemedDecoration Component Here
import ThemedDecoration from 'react';
export default class ThemedDecoration extends React.Component {
  render(){
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return (return React.cloneElement(child, {
 +        className: this.props.theme
 +      })
    });
    return(
      <div>

      </div>
    )
  }
}
