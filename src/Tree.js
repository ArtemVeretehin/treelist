import TreeNode from './TreeNode';

//Генерация элементов узла на основании данных(TreeList.js, хук listElements) об узлах
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