import React, { Component } from "react";

const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp {...props} />
    </div>
  );
};

@foo
class Child extends Component{
  render(){
    return (
      <div>child</div>
    )
  }
}
// function Child(props) {
//   return <div>child</div>;
// }
export default class HocPage extends Component {
 
  render() {
    // const Foo = foo(Child)
    return <div>
      <Child />
    </div>;
  }
}
