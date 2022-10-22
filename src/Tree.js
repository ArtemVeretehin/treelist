import TreeNode from './TreeNode';

const Tree = ({ data = [], getKey, rootKey }) => {
  return (
      <ul>    
          {data.map((tree) => (
              <TreeNode key={tree.key} node={tree} getKey={getKey} rootKey={rootKey} />
          ))}
      </ul>
  );
};

export default Tree;