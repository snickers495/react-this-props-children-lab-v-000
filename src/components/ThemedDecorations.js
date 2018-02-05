// Code ThemedDecoration Component Here
import ThemedDecoration from 'react';
export default class ThemedDecoration extends React.Component {
  render(){
    return(
      <div>
        <h1>You've been invited!</h1>
        {this.props.children}
      </div>
    )
  }
}
