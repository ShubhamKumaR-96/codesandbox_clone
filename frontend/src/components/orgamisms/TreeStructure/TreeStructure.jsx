import { useEffect } from "react";
import { useTreeStructureStore } from "../../../store/treeStructureStore";
import { Tree } from "../TreeNode/TreeNode";

const TreeStructure = () => {
  const { treeStructure, setTreeStructure } = useTreeStructureStore();

  useEffect(() => {
    if (treeStructure) {
      console.log("Tree structure:", treeStructure);
    } else {
      setTreeStructure();
    }
  }, [treeStructure, setTreeStructure]);

  return (
    <div>
      <Tree FileFolderData={treeStructure} />
    </div>
  );
};

export default TreeStructure;
