export function Headline(props: any) {
  //   console.log("props");
  //   console.log(props);
  return (
    <div>
      <h1>Headline Component {props.page} Page</h1>
      {props.children}
      {/* <p className="border border-blue-500 ">
        <button onClick={props.onClick}>button</button>
      </p> */}
    </div>
  );
}
