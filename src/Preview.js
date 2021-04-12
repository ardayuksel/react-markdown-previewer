import marked from "marked";
const renderer = new marked.Renderer();

const Preview = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer }),
      }}
      id="preview"
    ></div>
  );
};
export default Preview;
