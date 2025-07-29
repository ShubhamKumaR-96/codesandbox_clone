import Editor from "@monaco-editor/react";
const EditorComponent = () => {
  return (
    <>
      <Editor height="70vh"
      defaultLanguage="javascript"
      defaultValue="// Welcome to the sandbox ground" theme="vs-dark"  options={{
        fontFamily:'monospace', fontSize:18
      }} />
    </>
  );
};

export default EditorComponent;
